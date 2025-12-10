
import Button from './Button'
import Card from './Card'
function App() {
  return <div>
    <h1>Hello</h1>
    <Button name="Download" />
    <Button name="Click" />
    <Button name="Sign in" />
    <div style={{ 'display': 'flex', }}>
      <Card
        paragraf="Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos."
        title="Picture1"
        picture="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
      />
      <Card
        paragraf="Free stock photos & videos you can use everywhere. Browse millions of high-quality royalty free stock images & copyright free pictures."
        title="Picture 2"
        picture="https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg"
      />
      <Card
        paragraf="Download the best royalty free images from Shutterstock, including photos, vectors, and illustrations. Enjoy straightforward pricing and simple licensing."
        title="Picture 3"
        picture="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
      />
    </div>

  </div>
}
export default App