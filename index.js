import fs from 'fs';
import portAudio from 'naudiodon';
import wav from 'node-wav'

var ai = new portAudio.AudioIO({
  inOptions: {
    channelCount: 2,
    sampleFormat: portAudio.SampleFormat16Bit,
    sampleRate: 44100,
    deviceId: -1,
    closeOnError: true
  }
});

var ws = fs.createWriteStream('rawAudio.raw');
ai.pipe(ws);
ai.on('data', buf => {
  console.log(buf.toString('hex'))
});
ai.start();