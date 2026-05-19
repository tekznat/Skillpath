import { RESOURCE_MAP, CHANNEL_DETAILS, type ChannelDetails } from '@/data/youtubeResources'

export interface ResourceItem {
  title: string
  url: string
  type?: string
  free: boolean
  subtitle?: string
}

const normalizeTopic = (topic: string) =>
  topic
    .trim()
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/\+/g, ' plus ')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const getBestResourceKey = (topic: string) => {
  const normalizedTopic = normalizeTopic(topic)
  const keys = Object.keys(RESOURCE_MAP)

  const exactKey = keys.find((key) => normalizeTopic(key) === normalizedTopic)
  if (exactKey) return exactKey

  const broadMatch = keys.find((key) => {
    const normalizedKey = normalizeTopic(key)
    return normalizedTopic.includes(normalizedKey) || normalizedKey.includes(normalizedTopic)
  })
  if (broadMatch) return broadMatch

  const topicTokens = new Set(normalizedTopic.split(' '))
  const tokenMatch = keys.find((key) => {
    const normalizedKey = normalizeTopic(key)
    const keyTokens = normalizedKey.split(' ')
    return keyTokens.every((token) => token.length === 0 || topicTokens.has(token))
  })
  return tokenMatch
}

function lookupChannelsForKey(topic: string): ChannelDetails[] {
  const key = getBestResourceKey(topic)
  if (!key) return []
  const names = RESOURCE_MAP[key]
  if (!names) return []
  return names.map((channelName) => CHANNEL_DETAILS[channelName]).filter(Boolean) as ChannelDetails[]
}

function dedupeChannels(list: ChannelDetails[]): ChannelDetails[] {
  const seen = new Set<string>()
  return list.filter((c) => {
    const u = c.sampleVideoUrl
    if (seen.has(u)) return false
    seen.add(u)
    return true
  })
}

/** Curated channels for a topic, optionally merged with a second hint (e.g. course / goal name). */
export function findResourceChannels(topic: string, goalHint?: string): ChannelDetails[] {
  const primary = lookupChannelsForKey(topic)
  if (!goalHint || normalizeTopic(goalHint) === normalizeTopic(topic)) {
    return dedupeChannels(primary)
  }
  const secondary = lookupChannelsForKey(goalHint)
  return dedupeChannels([...primary, ...secondary])
}

export function buildTopicResources(
  topic: string,
  baseResources: ResourceItem[] = [],
  goalHint?: string,
): ResourceItem[] {
  const normalizedBaseResources = baseResources
    .filter((resource) => resource.free)
    .map((resource) => ({
      ...resource,
      type: resource.type ?? 'link',
    }))

  const baseVideoResources = normalizedBaseResources.filter((resource) => resource.type === 'video')
  const nonVideoBaseResources = normalizedBaseResources.filter((resource) => resource.type !== 'video')

  const existingUrls = new Set(normalizedBaseResources.map((resource) => resource.url))
  const channelResources = findResourceChannels(topic, goalHint)
    .map((channel) => ({
      title: channel.sampleVideoTitle,
      url: channel.sampleVideoUrl,
      type: 'video',
      free: true,
      subtitle: channel.channelName,
    }))
    .filter((resource) => !existingUrls.has(resource.url))

  const selectedVideo = channelResources[0] ?? baseVideoResources[0] ?? null
  const result: ResourceItem[] = [...nonVideoBaseResources]

  if (selectedVideo) {
    result.push(selectedVideo)
  }

  return result
}
