import Mic from 'node-microphone';
import WavFileWriter from 'wav';

function main() {
  const mic = new Mic()
  const micStream = mic.startRecording()
  // micStream.pipe( myWritableStream );
  setTimeout(() => {
    console.log('stopped recording')
    mic.stopRecording();
  }, 3000);
  mic.on('info', (info) => {
    new WavFileWriter.Writer(info)
    console.log(info);
  });
  mic.on('error', (error) => {
    console.log(error);
  });
}

main()