import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* className={styles.page} de styles hier is de import, de .page is de class uit de geimporteerde stylesheet*/}
      <main className={styles.main}>
        <Image className={styles.logo} src="svg/next.svg" alt="Next.js logo" width={100} height={20} priority />

        
        <div className={styles.intro}>
          <h1>
            To get started, edit the{" "}
            <code className={styles.code}>page.js</code> file.
          </h1>
          <p> Looking for a starting point or more instructions? Head over to{" "}
            {/* {" "} zorgt ervoor dat een spatie in de text komt*/}
            
            <a href="" target="_blank" rel="noopener noreferrer">
              {/* door target _blank opent de link op een nieuwe page*/}
              Templates</a>
            {" "}or the{" "}
            <a href="" target="_blank" rel="noopener noreferrer">
              Learning</a>{" "}
            
            center.
          </p>
        </div>


        <div className={styles.section}>
          <div>
            <Image className={styles.fish} src="/fish-1.png" alt="" width={150} height={150}/>
          </div>
          
          <div>
            <Image className={styles.fish} src="/fish-2.png" alt="" width={150} height={150}/>
          </div>
          
          <div>
            <Image className={styles.fish} src="/fish-3.png" alt="" width={150} height={150}/>
          </div>
        </div>
        
        <div className={styles.ctas}>

          <a className={styles.button} href="kanker.nl" target="_blank" rel="noopener noreferrer">
            <Image className={styles.logo} src="/sleutel.svg" alt="sleutel" width={100} height={20} priority/>
          </a>

          <a className={styles.button} href="kanker.nl" target="_blank" rel="noopener noreferrer">
            <Image className={styles.logo} src="/fish.svg" alt="" width={100} height={20} priority/>
          </a>
          
        </div>

      </main>
    </div>
  );
}
