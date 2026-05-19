import { CHANNEL_DETAILS } from './src/data/youtubeResources';

async function checkVideo(videoId: string): Promise<boolean> {
  try {
    const res = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
    if (res.status === 404) return false;
    if (res.status === 401) return false;
    return true;
  } catch (e) {
    return false;
  }
}

async function run() {
  console.log('Testing video links...');
  const promises = Object.entries(CHANNEL_DETAILS).map(async ([key, detail]) => {
    const isOk = await checkVideo(detail.videoId);
    if (!isOk) {
      console.log(`❌ BROKEN: [${key}] ${detail.sampleVideoUrl}`);
    }
  });

  await Promise.all(promises);
  console.log('Done testing.');
}

run();
