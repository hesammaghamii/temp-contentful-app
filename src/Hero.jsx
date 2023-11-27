import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <div className='img-container'>
            <img src={heroImg} alt='woman and the browser' className='img' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
