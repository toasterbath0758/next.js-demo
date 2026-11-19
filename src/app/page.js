import Image from "next/image";
import styles from "./page.module.css";
import fish from "./fish-collection.module.css";
// in ieder css file bestandsnaam moet module staan 
// voorbeeld: naam.module.css

export default function Home() {
  return (
    <div className={styles.page}>
      {/* className={styles.page} de styles hier is de import, de .page is de class uit de geimporteerde stylesheet*/}
      <main className={styles.main}>
        <Image className={styles.logo} src="/fish-logo.png" alt="geluksvis logo" width={100} height={40} priority />
        
        {/* {" "} zorgt ervoor dat een spatie/enter in de text komt*/}
        <div className={styles.intro}>
          <h1>De<code className={styles.code}>geluksvis</code>collectie</h1>
          <p><a href="#" target="_blank" rel="noopener noreferrer">terug naar boven</a></p>
              {/* door target _blank opent de link op een nieuwe page*/}
        </div>

        <div className={fish.section}>
        {Array.from({ length: 16 }, (_, i) => i + 1).map((nummer) => (
            <div key={nummer}>
              <Image className={fish.fish} src={`/fish-${nummer}.png`}
                alt="" width={150} height={150}/>
            </div>
          ))}
        </div>
        
        
        <div className={styles.ctas}>

          <a className={styles.button} href=".nl" target="_blank" rel="noopener noreferrer">
            <Image className={styles.logo} src="/sleutel.svg" alt="sleutel" width={100} height={20} priority/>
          </a>

          <a className={styles.button} href=".nl" target="_blank" rel="noopener noreferrer">
            <Image className={styles.logo} src="/fish.svg" alt="" width={100} height={20} priority/>
          </a>
          
        </div>

      </main>
    </div>
  );
}
