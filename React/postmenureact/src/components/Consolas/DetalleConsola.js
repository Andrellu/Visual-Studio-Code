import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "./imagenes.css";
import xbox from "./../../assets/images/Consolas/Xbox_consola.png";
import xbox360 from "./../../assets/images/Consolas/Consola_Xbox360.jpg";
import xboxOne from "./../../assets/images/Consolas/Consola_XboxOne.jpg";
import xboxSeries from "./../../assets/images/Consolas/Consola_XboxSeries.jpg";
import ps1 from "./../../assets/images/Consolas/Consola_PlayStation.jpg";
import ps2 from "./../../assets/images/Consolas/Consola_PlayStation2.jpg";
import ps3 from "./../../assets/images/Consolas/Consola_PlayStation3.jpg";
import ps4 from "./../../assets/images/Consolas/Consola_PlayStation4.jpg";
import ps5 from "./../../assets/images/Consolas/Consola_PlayStation5.jpg";
import psp from "./../../assets/images/Consolas/Consola_PSP3000.jpg";
import pspVita from "./../../assets/images/Consolas/Consola_PlayStationVita.jpg";
import gameBoy from "./../../assets/images/Consolas/Consola_GameBoy.jpg";
import NDS from "./../../assets/images/Consolas/Consola_NDS.jpg";
import NDS3D from "./../../assets/images/Consolas/Consola_NDS3d.jpg";
import NDS2D from "./../../assets/images/Consolas/Consola_NDS2d.jpg";
import NSOled from "./../../assets/images/Consolas/Consola_NintendoSwitch.jpg";

export default class DetalleXbox extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.nomConsola}</h1>
                {this.props.nomConsola === "Xbox"? (
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="xbox" src={xbox}/><br/>
                                <h2>Precio Salida : 500€</h2>
                                <h2>Número de ventas : 100 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripción de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        La Xbox posee una gran cantidad de accesorios, como son tarjetas de memorias, cables audio y vídeo.


                                        Control de Xbox versión 2004.

                                        Comparación de los controles de la sexta generación
                                        Adaptador RF Xbox: Es un adaptador que permite conectar la Xbox a televisores que carezcan de conexión de audio y vídeo.
                                        Cable estándar de conexión audio/video Xbox: Es un cable que permite conectar la consola a un televisor con terminal de entrada de audio y vídeo compuesto.
                                        Memoria Xbox: Es una unidad de memoria portátil cuya capacidad es de 8, 16 y 32 MB, sirve para almacenar partidas y poder transportar los archivos hacia otras consolas Xbox. Esta unidad es para uso exclusivo con controladores compatibles con Xbox que tengan ranuras de expansión de memoria.
                                        Auriculares: es un aparato que sirve para comunicarse mediante partidas multijugador en "XBOX LIVE"
                                        Control DVD: mediante un accesorio conectado a las entradas principales de controles comunes, el mismo recibe señales del control en su lector infrarrojo, esto permite disfrutar las películas tal como se haría con un DVD común. Es obligatorio el conectar este dispositivo para la reproducción de un DVD.
                                    </p>
                                </div>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "Xbox 360"?(
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="xbox360" src={xbox360}/><br/>
                                <h2>Precio Salida : 400</h2>
                                <h2>Número de ventas : 85 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripción de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        La XBox 360 es la primera de las tres consolas de nueva generación en aparecer. Las otras dos, Playstation 3 y Nintendo Revolution lo harán (esperemos) durante el año que viene. Microsoft ha sabido anteponerse a sus competidores y ofrecer su consola justo a tiempo para el periodo navideño, lo cual le puede reportar importantes beneficios en forma de implantación masiva en el mercado.

                                        Pero, ¿está la XBox 360 a la altura de los tiempos en lo que respecta a sus especificaciones técnicas? Vamos a darles un repaso para ver cuales son sus características, pero podemos adelantar que XBox 360 se pone por delante de todas las otras consolas que hay ahora mismo en el mercado. La XBox 360 está gobernada por una CPU basada en PowerPC y diseñada por IBM. Esta CPU funciona a a 3.2 GHz y consta de tres núcleos simétricos que pueden ejecutar dos hilos por hardware cada uno. Incorpora 512 MB de RAM de tipo GDDR3 a 700 Mhz, que le proporcionan un ancho de banda a memoria de 22.4 Gbps.

                                        La tarjeta gráfica que incorpora es un desarrollo de ATI, basado en la familia ATI Radeon R500, y funciona a 500 MHz. Es capaz de mover 500 millones de triángulos por segundo y tiene una resolución de salida de 720p o 1080i, con formato panorámico 16:9. La XBox 360 está especialmente pensada para ser usada con televisores HDTV de alta resolución y, al parecer, Microsoft ha llegado a un acuerdo con muchas tiendas para que muestren sus consolas con este tipo de teles.

                                        El audio tiene una frecuencia máxima de 48 KHz con una resolución de hasta 32 bits, pudiendo decodificar hasta 256 canales al mismo tiempo. Todos los juegos soportan Dolby Digital 5.1, lo que garantiza un sonido espectacular, especialmente si utilizamos un sistema de HomeTheater.

                                        Los juegos de XBox 360 vendrán en discos DVD de doble capa, con una capacidad de hasta 8.5 GB. El lector que incorpora es de 12X y soporta los siguientes formatos: DVD-ROM, DVD-R/RW, DVD+R/RW, CD, CD-R y CD-RW. La consola también puede usar un disco duro interno de 20 GB, el cual será imprescindible si queremos usar la emulación de juegos de la XBox. Además, también incorpora dos ranuras para tarjetas de memoria de 64 MB, donde se podrán guardar las partidas, puntuaciones,...

                                        La conectividad está asegurada a través de una tarjeta Ethernet Gigabit. También podemos usar una red inalámbrica, si disponemos de ella, mediante los accesorios que Microsoft pondrá a la venta.

                                        Soporta hasta cuatro inalámbricos, además de tres controladores adicionales a través de USB. Estos controladores serán compatibles con PCs con Windows XP. El controlador inalámbrico tiene una autonomía de hasta 25 horas mediante el pack de baterías recargables NiMh.

                                        Las posibilidades de expansión de la consola vienen dadas por la incorporación de tres puertos USB 2.0, a través de los cuales podremos conectar discos duros externos y otros reproductores y consolas, como el iPod o la PSP, desde los cuales podremos reproducir contenido multimedia.
                                    </p>
                                </div>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "Xbox One"?(
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="xboxone" src={xboxOne}/><br/>
                                <h2>Precio Salida : 500</h2>
                                <h2>Número de ventas : 48 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripción de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        La consola está formada por un procesador AMD de 8 núcleos Custom de 64 bits basado en microarquitectura Jaguar y una velocidad estimada en 1,75 Ghz, 8 GB de memoria RAM DDR3 más 32 MB de ESRAM, con una velocidad de hasta 204 GB/s22​ 500 GB de disco duro y un lector Blu-ray 6x.6​ Los gráficos integrados también corren por parte de AMD siendo 8 veces más potentes que los de Xbox 360 y compuestos por 5 000 000 000 de transistores, diez veces más que Xbox 360. Incluye además conexiones USB 3.0, HDMI in-out y 802.11n Wireless. También el Kinect 2.0,23​ con una cámara de 1080p que procesa 2 GB de datos por segundo con un tiempo de respuesta de 13 milmillonésimas de segundo.6​ El sistema operativo está formado por un Kernel de Windows que tiene varias funciones multimedia y de Internet Explorer, otro dedicado en exclusiva a la consola y un tercero que gestiona ambos aspectos de forma simultánea. Cuenta con una unidad óptica Blu-ray Disc e incluye el sistema cloud de almacenamiento en línea.

                                        Se confirmó que gracias a la nube, tendría soporte para contenido en resoluciones de 4K (Ultra HD) para contenidos de vídeo, imágenes y para juegos.24​ Xbox One también puede recibir señales televisivas vía cable coaxial de sistema de TV de pago por cable o satelital, desplazando los descodificadores de las empresas de televisión de pago. Sin embargo, es desconocido si Xbox puede funcionar con ciertos descodificadores que además requieren una Smart Card. También puede hacer de intermediario entre señales televisivas vía cable HDMI de los descodificadores de TV de pago, solo si estos incorporan HDMI; sin embargo Xbox o Kinect por sí mismos no pueden cambiar de canal por el mando u orden de voz, ya que no controlan el descodificador, solo reciben su imagen.

                                        El puerto HDMI puede recibir una segunda señal de vídeo de otros dispositivos, como un PC, reproductor Blu-Ray o incluso de otras consolas.25​

                                        Xbox One carece de un conector RCA y esto lo hace incompatible con los antiguos televisores de rayos catódicos (aunque se pueden conseguir adaptadores especiales de HDMI a Conector RCA relativamente económicos para poder usar la consola con este tipo de aparatos.)
                                    </p>
                                </div>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "Xbox Series X|S"?(
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="xboxseries" src={xboxSeries}/><br/>
                                <h2>Precio Salida : 500€/300€</h2>
                                <h2>Número de ventas : 8 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripción de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        El SoC de la Xbox 360 es un chip creado a medida por AMD para Microsoft, el cual ha sido creado a medida y por tanto es exclusivo de la consola de Microsoft. Se trata de un procesador monolítico de 360 mm2 de tamaño, el cual incluye los siguientes componentes en su interior:
                                        CPU basada en la arquitectura AMD Zen 2.
                                        GPU a medida basada en la arquitectura RDNA 2 de AMD
                                        Aceleradores especializados en ciertas tareas concretas del hardware
                                        Vamos a ir desgranando punto por punto las diferentes partes del SoC de la Xbox Series X en todo este artículo. ya que es la unidad principal que engloba todo el hardware excepto la memoria RAM del sistema y el almacenamiento SSD del mismo.
                                        Al contrario que su homologa en PlayStation 5, de igual arquitectura, puede funcionar de dos modos distintos:

                                        En el primer modo, funciona con el SMT activo y por tanto puede ejecutar 2 hilos de ejecución por núcleo. En dicho modo funciona a 3.6 GHz, por lo que es 0.1 GHz más rápida que su homóloga en PlayStation 5.
                                        En el segundo modo, el SMT queda inactivo, pero a cambio cada núcleo funciona a 3.8 GHz. Este modo esta pensado especialmente para los juegos de Xbox One (X) que se ejecutaban en 8 núcleos AMD Jaguar sin soporte multhilo.
                                        El hecho de utilizar la arquitectura Zen 2 supone un salto importante, la nueva CPU no solo duplica en velocidad de reloj a los modelos estándar de Xbox One, sino que además llega a tener más del doble de potencia por ciclo de reloj, suponiendo uno de los saltos más grandes entre generaciones de consolas.
                                    </p>
                                </div>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "PlayStation 1"? (
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="ps1" src={ps1}/><br/>
                                <h2>Precio Salida : 360€</h2>
                                <h2>Número de ventas : 100 millones</h2>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripción de {this.props.nomConsola}:</h2>
                                    <p>
                                        La primera consola de la serie, fue PlayStation, que también fue la primera en vender 100 millones de unidades.2​ Su sucesora, PlayStation 2, es la segunda consola de la serie, y la más vendida de la historia hasta la fecha, alcanzando más de 155 millones de unidades vendidas, llegando a estar en el mercado por 13 años.2​ PlayStation 3, ha vendido más de 87 millones de consolas en todo el mundo,3​ después le sigue PlayStation 4 lanzada en 2013 & 2014 con 118 millones de unidades vendidas como la tercera consola en superar dicho formato Y la más reciente consola de Sony, PlayStation 5, lanzada en noviembre de 2020, ha llegado a las 10,1 millones de unidades.4​
                                    </p>
                                </div>
                            </div>
                        </div>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "PlayStation 2"?(
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="ps2" src={ps2}/><br/>
                                <h2>Precio Salida : 420€</h2>
                                <h2>Número de ventas : 155 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripción de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        CPU: Emotion Engine (EE) RISC MIPS-IV (R5900) de 64 bits con capacidades SIMD de 128 bits10​
                                        Frecuencia de reloj del Sistema: 294.912 MHz (299 MHz a partir de la Versión V9).
                                        Acumulador Multiplicador de Coma Flotante (FMAC) x 1
                                        Divisor de Coma Flotante (FDIV) x 1
                                        8 KB Caché (4 KB Instrucciones + 4 KB Datos)
                                        Co-Procesador 2: VU0
                                        Acumulador Multiplicador de Coma Flotante (FMAC) x 4
                                        Divisor de Coma Flotant (FDIV) x 1
                                        8 KB Caché (4 KB Instrucciones + 4 KB Datos)
                                        Unidad de Procesado Vectorial: VU1
                                        Acumulador Multiplicador de Coma Flotante (FMAC) x 5
                                        Divisor de Coma Flotante (FDIV) x 2
                                        24 KB Caché (16 KB Instrucciones + 8 KB Datos)
                                        16 KB Scratch Pad RAM
                                        Ancho de banda del Bus de memoria: 128 bits DMA con 10 canales
                                        Memoria
                                        32 megabytes RAMBUS DRAM
                                        Ancho de 32 bits (16 bits en Dual Channel)
                                        400 MHz (800 MHz efectivos)
                                        800 megabits por segundo por pin
                                        Ancho de Banda de 3.2 gigabytes por segundo
                                        Prestaciones
                                        Rendimiento en coma flotante: 6.5  GFLOPS
                                        Transformación Geométrica 3D: 6 600 000 polígonos/s
                                        Decodificador de compresión de imagen: MPEG2
                                        Procesamiento de superficies (Bezier): 16 000 000 de polígonos/s
                                        Procesamiento de imágenes: 150 000 000 de píxeles/s
                                        Transformación de perspectivas: 66 000 000 de polígonos/s
                                        Iluminación: 38 000 000 de polígonos/s
                                        Partículas: 36 000 000 de polígonos/s
                                        512 Pixel Pipelines
                                        32.5 gigapixeles por segundo (sin texturas)
                                        500 gigatexeles por segundo
                                        Filtro por Punto, Bilinear, Trilinear, Anisotrópico y Mip-Map
                                        Corrección de Perspectiva de Mapeado de Texturas
                                        Bump Mapping
                                        Environment Mapping
                                        512-bit Color (RGBA)
                                        512-bit Z Buffer
                                        4 MB VRAM
                                        eDRAM de ancho de banda de 38.4 gigabytes por segundo (19.2 GB/s en cada dirección)
                                        eDRAM de ancho de banda de Texturas de 9.6 gigabytes por segundo
                                        150 000 000 de partículas por segundo
                                    </p>
                                </div>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "PlayStation 3"?(
                    <div>
                        <di className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="ps3" src={ps3}/><br/>
                                <h2>Precio Salida : 500€</h2>
                                <h2>Número de ventas : 102 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripción de {this.props.nomConsola}:</h2>
                                    <p>
                                        En la PlayStation 3 llegó una importante revolución en el aspecto de controladores para consolas de Sony. El mando añadió la función de detección del movimiento y vibración. A este primer mando se le llamó Sixaxis, nombre que significa «seis ejes» haciendo referencia a los seis (six) ejes (axis) de detección de movimiento (3 para movimientos posicionales en el espacio mediante acelerómetros y 3 para la detección de rotación). Más tarde, debido a las críticas de los usuarios hacia la falta de vibración, se hizo una revisión del mando con el nombre DualShock 3, que añade la función de vibración de nuevo al mando:
                                        Tiene función inalámbrica a través de Bluetooth, con batería de litio de aproximadamente 30 horas de autonomía, cargándose a través de un cable USB-miniUSB. Además se puede conectar a la consola a través del mismo cable, sin necesidad de usar la función inalámbrica.
                                        Los botones R2 y L2 son ahora gatillos analógicos.
                                        Al igual que en la PSP, se ha añadido el Botón Home (Botón PS) en el centro del mando, similar al botón Xbox Guide del mando de la Xbox 360.
                                        Tiene cuatro ledes en la parte delantera, que permiten saber en qué puerto está conectado.
                                        Se ha mejorado su sensibilidad con respecto a su predecesor.
                                        Se introdujeron seis grados de libertad.
                                    </p>
                                </div>
                            </div>
                        </di>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "PlayStation 4"?(
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="ps4" src={ps4}/><br/>
                                <h2>Precio Salida : 400€</h2>
                                <h2>Número de ventas : 116 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripción de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        Nombre del producto

                                        PlayStation®4

                                        Código del producto

                                        Serie CUH-2000

                                        Procesador principal

                                        Procesador personalizado de un chip

                                        CPU: AMD 'Jaguar' x86-64, 8 núcleos

                                        GPU: motor gráfico AMD de 1,84 TFLOPS basado en Radeon™

                                        Memoria

                                        8 GB GDDR5

                                        Capacidad de almacenamiento*

                                        500 GB, 1 TB

                                        Dimensiones externas

                                        Aprox. 265×39×288 mm (anchura × altura × longitud, 
                                        sin incluir las piezas que sobresalen)

                                        Peso

                                        Aprox. 2,1 kg

                                        Unidad BD/DVD
                                        (solo lectura)

                                        BD de 6 CAV
                                        DVD de 8 CAV

                                        Entrada/Salida

                                        2 puertos de altísima velocidad USB (USB 3.1 Gen1) 
                                        1 puerto AUX

                                        Red

                                        1 puerto Ethernet (10BASE-T, 100BASE-TX, 1000BASE-T)

                                        IEEE 802.11 a/b/g/n/ac

                                        Bluetooth® 4.0

                                        Alimentación

                                        AC de 100-240 V, 50/60 Hz

                                        Consumo de energía

                                        Máx. 165W

                                        Temperatura de funcionamiento

                                        5 ºC - 35 ºC

                                        Salida AV

                                        Salida HDMI™ (compatible con salida HDR)
                                    </p>
                                </div>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "PlayStation 5" ?(
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="psp" src={ps5}/><br/>
                                <h2>Precio Salida : 500€</h2>
                                <h2>Número de ventas : 13 millones</h2> <br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripción de {this.props.nomConsola}:</h2>
                                    <p>
                                        CPU x86-64-AMD Ryzen “Zen 2” con 8 núcelos y 16 subprocesos, y una frecuencia variable de hasta 3,5 GHz.
                                        GPU con 10,3 TFLOPS de potencia, con 36 CUs a una frecuencia variable de hasta 2,23 GHz, basada en AMD Radeon RDNA 2.
                                        16 GB de memoria GDDR6.
                                        Tendrá disco duro SSD, que ya de por sí es una tecnología que marcará una gran diferencia para reducir al máximo los tiempos de carga de los juegos. Pero además, el disco duro SSD de PlayStation 5 será más del doble de rápido que el de Xbox Series X, y su ancho de banda de lectura alcanzará los 5,5 GB por segundo para datos en bruto, y entre 8 y 9 GB por segundo para datos comprimidos. Esta velocidad ultraalta supondrá muchas ventajas, como la eliminación de tiempos de carga al arrancar el juego, cambiar de nivel o utilizar la opción de “viaje rápido” en juegos de mundo abierto. Además, gracias a esto los desarrolladores también podrán crear mundos más grandes y con más detalles.
                                        El mencionado disco duro SSD tendrá una capacidad de almacenamiento de 825 GB. En este sentido sí estará por debajo de Xbox Series X (que tendrá 1 TB), pero será posible aumentar la memoria adquiriendo un disco duro adicional: para instalar juegos de PS5 será necesario conectar un disco duro SSD específico (Sony anunciará próximamente los que serán compatibles), mientras que para juegos retrocompatibles nos servirá un disco duro normal.
                                        Su GPU permitirá trazado de rayos, la nueva tecnología que hace posible representar gráficos mucho más realistas gracias a las mejoras en sombras, reflejos y efectos de iluminación.
                                        Audio 3D envolvente con tecnología Tempest 3D AudioTech, diseñado para ofrecer una mayor inmersión y que identifiquemos desde qué dirección viene cada sonido.
                                        Los juegos de PlayStation 5 serán capaces de alcanzar la resolución 8K y la fluidez de 120 fotogramas por segundo, aunque se espera que el estándar normal sea verlos correr de manera fija a 4K y 60 fps.
                                        Su lector de Ultra HD Blu-ray será capaz de leer discos de hasta 100 GB, lo cual será útil tanto para recibir juegos de gran tamaño como para reproducir películas en este formato. El juego en la nube, que es una gran apuesta de Sony, también tendrá algún tipo de presencia, pero el formato físico seguirá siendo primordial.
                                    </p>
                                </div>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "PSP 3000"? (
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="vita" src={psp}/><br/>
                                <h2>Precio Salida : 170€</h2>
                                <h2>Número de ventas : 76 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripción de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        Tamaño de pantalla: 4.3 pulgadas, proporción 16:9.
                                        Resolución de pantalla : 480 x 272, 16 millones de colores.
                                        CPU: MIPS R4000; 333 MHz
                                        Tamaño: 169 x 71 x 19 mm (6,7 x 2,9 x 0,9 pulgadas).
                                        Micrófonos incorporados
                                        El símbolo del botón HOME ha sido reemplazado por el símbolo PS.
                                        Los botones inferiores cambian de forma.
                                        Un anillo más fino.
                                        La pantalla ofrece algo más de contraste.
                                        La batería durará lo mismo que la PSP Slim & Lite, aunque en un principio se dijo que duraría menos
                                        Memoria: Memory Stick (hasta 32GB).
                                    </p>
                                </div>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "PSP Vita"?(
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="psVita" src={pspVita}/><br/>
                                <h2>Precio Salida : 250€</h2>
                                <h2>Número de ventas : 26 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripción de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        PlayStation Vita Model PCH-1000
                                        CPU ARM Cortex-A9 core (4 core)
                                        GPU SGX543MP4+
                                        Dimensiones Approx. 182.0 x 18.6 x 83.5mm
                                        Pantalla táctil 5 pulgadas(16:9), 960 x 544, Approx. 16 million colors, OLED Multi touch screen
                                        512MB VRAM 128MB
                                        Pantalla táctil trasera
                                        Cameras trasera y delantera
                                        Frame rate 120fps@320x240(QVGA), 60fps@640x480(VGA) 
                                        Resolución 640x480(VGA)
                                        Sonido estereo
                                        Micrófono integrado
                                        Sensores Six-axis (giroscopio, accelerometro)
                                        GPS (solo en modelo con 3G/Wi-Fi)
                                        Wi-Fi location service support
                                        Botones: PS, Encendido Directionales (Up/Down/Right/Left) Acción (Triángulo, Cuadrado, Círculo, Equis) Botones inferiores (Derecha/Izquierda) Stick Izquierdo y Derecho, START , SELECT, Volumen (+/-)
                                        Wireless (3G/Wi-Fi )
                                        IEEE 802.11b/g/n (n = 1x1)(Wi-Fi) (Infrastructure mode/Ad-hoc mode)
                                        Bluetooth 2.1+EDR (A2DP/AVRCP/HSP)
                                        PlayStation Vita card slot
                                        Memory card
                                        SIM card slot (3G/Wi-Fi model)
                                        Puerto multiuso (for USB data communication, DC IN, Audio (Stereo Out / Mono In), Serial data communication)
                                        Headset jack (Stereo mini jack) (Audio (Stereo Out / Mono In))
                                        Puerto para accesorios
                                        Batería de Litio
                                        AC adaptor AV 
                                        Formatos: MP3 MPEG-1/2 Audio Layer 3, MP4 (MPEG-4 AAC), WAVE (Linear PCM), MPEG-4 Simple Profile (AAC), H.264/MPEG-4 AVC High/Main/Baseline Profile (AAC), JPEG (Exif 2.2.1), TIFF, BMP, GIF, PNG
                                    </p>
                                </div>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "Game Advance"?(
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="gameBoy" src={gameBoy}/><br/>
                                <h2>Precio Salida : 132€</h2>
                                <h2>Número de ventas : 81 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripción de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        Procesador principal (CPU):
                                        CPU de 32-bits con memoria integrada.
                                        Dimensiones:
                                        82 x 144,5 x 24,5mm.
                                        Peso:Aprox. 140g.Corriente:2 pilas AA.
                                        Duración en juego:
                                        Aprox. 15 horas.
                                        Tipo de pantalla:
                                        Pantalla TFT de alta resolución (TFT = Thin Film Transistor).
                                        Dimensiones de la pantalla:40,8mm x 61,2mm.
                                        Colores posibles:
                                        32.768 colores posibles.
                                        511 colores simultáneamente en modo de caracteres.
                                        32.768 colores simultáneamente en modo mapa de bits.
                                        Resolución de la pantalla:
                                        240 x 160 píxels.
                                        Cartuchos:
                                        Intercambiables.
                                        Control del volumen:
                                        Sí.
                                        Conexión de auriculares:
                                        Sí.
                                        Colores:
                                        Azul claro, Rojo claro, Morado, Blanco.
                                        Conexión de cable de dos direcciones:
                                        Sí.
                                        Características clave:
                                        Indicador LED de carga de batería (con los colores verde y rojo alternando).
                                        Recepción de sonido PCM (sonido de auriculares estéreo).
                                        Compatible prácticamente con todos los juegos de Game Boy, Game Boy Pocket y Game Boy Color.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "Nintendo DS" ? (
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="nds" src={NDS}/><br/>
                                <h2>Precio Salida : 150€</h2>
                                <h2>Número de ventas : 154 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripción de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        El controlador de vídeo realizaba las siguientes operaciones 3D por hardware: transform and lighting, transformación textura-coordenada 3D, síntesis de textura, alpha blending, antialiasing, Cel shading, y z-buffering. Sin embargo usa filtrado de textura (nearest neighbor) haciendo que algunos títulos se vean pixelados. El sistema teóricamente puede generar alrededor de 120.000 triángulos por segundo a 60 cuadros por segundo. A diferencia de la mayoría del hardware 3D, tiene un límite de unos en el número de triángulos que puede dibujar en una sola escena (unos 6144 vértices, o sea 2048 triángulos). El hardware 3D está diseñado para dibujar una sola pantalla por vez, o sea que para cuando se dibujan imágenes 3D diferentes en ambas pantallas la velocidad disminuye notablemente. La DS está generalmente más limitada por la cantidad de polígonos que por la velocidad de refresco. Posee una memoria de texturas de 132 KB por pantalla y un tamaño máximo de textura de 1024x1024 píxeles. La consola Nintendo DS cuenta 4 MB de RAM. Además de que cuenta con un procesador de doble núcleo, 67 MHz (el núcleo principal) y 33 MHz (el núcleo secundario).

                                        El sistema tenia dos procesadores 2D por pantalla, similar al de Game Boy Advance, que tiene solo uno. Sin embargo, los núcleos están divididos en principal y secundario y solo el principal puede capturar vértices del motor 3D. La memoria de vídeo es de 656 KB.3​

                                        Nintendo DS tenia compatibilidad con Wi-Fi IEEE 802.11b. La unidad también soporta un protocolo especial inalámbrico creado por Nintendo que usa cifrado RSA en la señalización el cual era usado tanto para PictoChat, un chat para consolas DS, como para el sistema de descargas de DS, el cual permitía compartir un cartucho entre dos consolas distintas. El Wi-Fi se usa para acceder a la conexión Wi-Fi de Nintendo donde los usuarios pueden usar Internet o varios usuarios pueden jugar al mismo juego.
                                    </p>
                                </div>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "Nintendo 3DS" ? (
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <img className="consola" alt="3d" src={NDS3D}/><br/>
                                <h2>Precio Salida : 200€</h2>
                                <h2>Número de ventas : 77 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripción de {this.props.nomConsola}:</h2>
                                    <p>
                                        Tamaño: 134×74×21mm
                                        Peso: 230 gramos
                                        Pantalla superior: 3,53 pulgadas, panorámica con visión 3D sin gafas, 800×240 píxeles de resolución.
                                        Pantalla inferior: 3,02 pulgadas, 320×240 píxeles de resolución
                                        Una interior y dos exteriores para recrear el efecto 3D, cada una de ellas con una resolución de 0,3 megapíxeles (640×480)
                                        2,4GHz. Intercambio de datos con otras 3DS a través del Modo Tag. Conexión a internet en puntos de acceso LAN.
                                        Botones A/B/Y/X, D-pad, L/R, Start/Select, Pad deslizante (360º), pantalla táctil, micrófono interno, cámara, sensor de movimiento, giroscopio, volumen 3D (ajusta el grado del efecto 3D), botón de Home, botón de conexión inalámbrica, botón de energia.
                                        Ranura para tarjetas de juego, ranura para tarjetas SD, conexión de corriente, conexión de carga, conexión de auriculares.
                                    </p>
                                </div>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : this.props.nomConsola === "Nintendo 2DS" ? (
                    <div>
                        <img className="consola" alt="2d" src={NDS2D}/><br/>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <h2>Precio Salida : 100€</h2>
                                <h2>Número de ventas : 77 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripción de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        Las medidas de la propia consola son ligeramente superiores a las de la 3DS: 127 x 144 x 20,3 mm y tiene un peso de 260 g (la Nintendo 3DS pesa 235 g, por ejemplo, mientras que la 3DS XL se va hasta los 336 g). La Nintendo 2DS incluye un stick analógico y una cruceta a la izquierda, los botones X, A, B, Y, Start y Select a la derecha, dos botones superiores, botón de encendido, botón Home, un micrófono, un altavoz, salida de auriculares estéreo, ranura para tarjetas SD, y un nuevo botón deslizante llamado Sleep que deja la consola en reposo y que equivale a cerrarla en la 3DS.

                                        En su interior, además, incorpora sensores de aceleración y de giro y cuenta con conectividad WiFi que permite acceder a la Nintendo eShop y hacer uso tanto de StreetPass como de SpotPass. La batería, por su parte, se carga en aproximadamente 3,5 horas y ofrece una autonomía de entre 3,5 horas y 5,5 horas para los juegos de 3DS y de 5 a 9 horas para los juegos de Nintendo DS. En modo Sleep es capaz de aguantar 3 días de forma aproximada.

                                        A pesar de no ser capaz de mostrar imágenes en 3D, la Nintendo 2DS lleva una cámara frontal y dos traseras que sí permiten capturar imágenes y vídeos en tres dimensiones que pueden ser almacenadas en la tarjeta de memoria para posteriormente transferirlas a algún otro dispositivo que sí sea capaz de mostrar 3D estereoscópico.
                                    </p>
                                </div>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                ) : (
                    <div>
                        <img className="consola" alt="nsoled" src={NSOled}/><br/><br/>
                        <div className="row justify-content-center">
                            <div className="col-8 text-center">
                                <h2>Precio Salida : 350€</h2>
                                <h2>Número de ventas : 55 millones</h2><br/>
                                <div className="card shadow-sm p-4" style={{ backgroundColor: "silver" }}>
                                    <h2>Descripción de {this.props.nomConsola}:</h2><br/>
                                    <p>
                                        Tamaño: 102mm x 239mm x 13,9 mm con los Joy-Con acoplados.
                                        Peso: 297 g (398 g con los Joy-Con).
                                        Pantalla: LCD 6,2 pulgadas/1280x720 de resolución/táctil.
                                        CPU/GPU: Procesador Tegra NVIDIA.
                                        Memoria: 32GB.
                                        Prestaciones de comunicación: LAN inalámbrico (también por cable en modo TV)/Bluetooth 4.1.
                                        Salida de vídeo: 1920x1080, 60fps (EN modo TV a través de cable HDMI).
                                        Salida de audio: Compatible con PCM lineal 5.1 (en modo TV a través de cable HDMI).
                                        Altavoces: Estéreo.
                                        Terminal USB: Type-C (para cargar o conectar a la base).
                                        Conector de micrófono y auriculares: Salida estéreo.
                                        Ranura de tarjetas de juego: Sólo compatible con tarjetas de Switch.
                                        Ranura de tarjetas microSD: Compatible con microSD, microSDHC y microSDXC (con actualización).
                                        Sensores: Acelerómetro, giroscopio y sensor de brillo.
                                        Condiciones ambientales: Temperatura 5-35ºC/Humedad 20-80%.
                                        Batería interna: Batería de ion de litio con capacidad 4310 mAH no extraíble.
                                        Duración de la batería: Entre 3 y 6 horas dependiendo del uso de Nintendo Switch.
                                        Tiempo de carga: 3 horas aproximadamente en modo espera.
                                    </p>
                                </div>
                            </div>
                        </div><br/>
                        <NavLink to="/home" className="btn-close"><button type="button" class="btn btn-danger">Close</button></NavLink>
                    </div>
                )}
            </div>
        )
    }
}
