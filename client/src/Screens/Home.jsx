import React from 'react'
import style from './Home.module.css'

const Home = () => {
  return (
    <div>

      <img src='public/images/banner.png' className={style.banner}/>

      <section className={style.principal}>
        <h1 className={style.principalTittle}>Bienvenidos a MonsterArts</h1>

        <artitle>
          <img src="public/images/flores.png" className={style.flowers} />
          <p>            
            Bienvenidos a MonsterArts, donde la creatividad se encuentra con la inspiración para crear verdaderas obras maestras. Somos más que una tienda de arte; somos un refugio para todos aquellos apasionados por la autoexpresión y la belleza artística.
            <br/><br/>
            En MonsterArts, creemos en la individualidad y en el poder del arte para transformar vidas. Nuestro equipo de expertos en arte está aquí para ayudarte a encontrar los materiales perfectos, desde pinceles y lienzos hasta obras de arte únicas, ya sea que estés comenzando tu viaje artístico o buscando expandir tu colección.
            <br/><br/>
            Nos enorgullece ofrecer un ambiente acogedor y profesional donde cada cliente se sienta valorado y apoyado. Desde la selección de tus herramientas creativas hasta la adquisición de piezas exclusivas, estamos comprometidos a brindarte una experiencia excepcional en cada paso del proceso.
            <br/><br/>
            Únete a la comunidad de MonsterArts y descubre el poder de la autoexpresión a través del arte. Estamos aquí para ayudarte a contar tu historia, una obra de arte a la vez.
            <br/><br/><hr/>
          </p>
        </artitle>
      </section>

      <section className={style.diferenciales}>
        <h1 className={style.principalTittle}>Diferenciales</h1>
        <ul>
          <li><b>Atención Personalizada a los Clientes:</b> Nos enorgullece ofrecer una atención dedicada y personalizada. Escuchamos tus necesidades y te ayudamos a encontrar las mejores soluciones para tus proyectos artísticos.</li><br/>
          <li><b>Diseños Personalizados:</b> Trabajamos de la mano con artistas locales y emergentes para ofrecerte piezas de arte únicas y exclusivas, diseñadas especialmente para nuestros clientes.</li><br/>
          <li><b>Espacio Diferenciado:</b> Nuestro espacio está diseñado para inspirar creatividad. Ya sea que estés comprando suministros o explorando nuevas obras de arte, nuestra tienda ofrece un ambiente relajado y acogedor.</li><br/>
          <li><b>Localización Estratégica:</b> Ubicados en el corazón de la ciudad, nuestra tienda es fácilmente accesible, permitiéndote sumergirte en el mundo del arte con comodidad.</li><br/>
          <li><b>Profesionales Calificados:</b> Contamos con un equipo de expertos en arte, desde curadores hasta asesores de materiales, que están aquí para brindarte el mejor consejo y orientación.</li><br/>
          <li><b>Puntualidad:</b> Valoramos tu tiempo. Por eso, nos aseguramos de cumplir con los plazos y entregas acordados, ya sea para pedidos especiales o servicios personalizados.</li><br/>
          <li><b>Limpieza:</b> Mantenemos un entorno limpio y ordenado para garantizar una experiencia de compra agradable y segura en todo momento.</li><br/>
        </ul>

        <div className={style.video}>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/9rVKos-oGnQ?si=lZdXCrCeaPkcwjL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

      </section>

      <section className={style.mapa}>

        <h3 className={style.principalTittle}>Nuestra Ubicación</h3>
        <p className={style.mapa}>Nuestro establecimiento está ubicado en el corazónde la ciudad</p>
        <hr/>

        <div className={style.mapaContenido}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15901.098643248515!2d-75.89334187141188!3d4.893616500953607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3878115b648677%3A0x6d0f6caf27117b0!2sMonster%20Tattoo%20La%20Virginia!5e0!3m2!1ses-419!2sco!4v1714594897550!5m2!1ses-419!2sco" width="100%" height="300" style={{border:0}}allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </section>

    </div>
  )
}

export default Home;