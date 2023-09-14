import classes from './hero.module.css';
import Image from 'next/legacy/image';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile.png"
          alt="Karthik"
          width="300"
          height="300"
          layout="responsive"
          priority={true}
        />
      </div>
      <h1>Hi, I'm Karthik</h1>
      <p>
        I speak about web development - especially on technologies such as
        Dotnet,React.Js & Next.Js
      </p>
    </section>
  );
};

export default Hero;
