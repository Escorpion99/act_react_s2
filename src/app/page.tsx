"use client";

import React from 'react';
import TarjetaGlobal from './components/TarjetaGlobal';
import TarjetaModulo from './components/TarjetaModulo';
import TarjetaDinamica from './components/TarjetaDinamica';
import TarjetaTailwind from './components/TarjetaTailwind';

const HomePage = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Demostración de Métodos de Estilizado en React
      </h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-blue-500 pb-2 text-gray-700">
          1. Estilos Globales (globals.css)
        </h2>
        <div className="flex flex-wrap justify-center">
          <TarjetaGlobal
            titulo="Tarjeta con Estilos Globales"
            contenido="Esta tarjeta utiliza clases CSS globales definidas en el archivo globals.css, lo que facilita la reutilización de estilos en toda la aplicación."
            color="#2a9d8f"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-green-500 pb-2 text-gray-700">
          2. Módulos CSS
        </h2>
        <div className="flex flex-wrap justify-center">
          <TarjetaModulo
            nombre="Tarjeta Primaria"
            descripcion="Componente estilizado con CSS Modules. El scope de las clases está limitado a este componente, evitando conflictos."
            categoria="Módulo"
            variante="primaria"
          />
          <TarjetaModulo
            nombre="Tarjeta de Éxito"
            descripcion="Esta es una variante de la tarjeta, mostrando cómo componer clases para crear estilos condicionales y temáticos."
            categoria="Variante"
            variante="exito"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-purple-500 pb-2 text-gray-700">
          3. Estilos en Línea
        </h2>
        <div className="flex flex-wrap justify-center items-start">
          <TarjetaDinamica
            titulo="Tarjeta Dinámica (Activa)"
            contenido="El fondo y el color del texto cambian dinámicamente según las props pasadas al componente."
            colorFondo="#f9e79f"
            colorTexto="#b7950b"
            ancho="300px"
            activo={true}
          />
          <TarjetaDinamica
            titulo="Tarjeta Dinámica (Inactiva)"
            contenido="Cuando la prop 'activo' es false, se aplican estilos por defecto para indicar un estado inactivo."
            colorFondo="#f9e79f"
            colorTexto="#b7950b"
            ancho="250px"
            activo={false}
          />
        </div>
      </section>

      {/* Sección 4: Tailwind CSS */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-orange-500 pb-2 text-gray-700">
          4. Tailwind CSS
        </h2>
        <div className="flex flex-wrap justify-center">
          <TarjetaTailwind
            titulo="Tarjeta con Tailwind"
            descripcion="Esta tarjeta utiliza clases de utilidad de Tailwind CSS directamente en el JSX, creando un diseño moderno y responsivo."
            imagen="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEBUPEBARDxAQEhYQFRUQEhcWEBYVFRcWFhUWFRUYHSggGBslHxUVITEtJSkrLi4uFyAzODUsNygtLisBCgoKDg0OGhAQGislHyUuLS0tLi0tLS0tKy0vKy0tLS0rLS0tLS0tLS0vLS8tLS0tKystLi0vLS0tLSstLS0tLf/AABEIAJ8BPgMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAgMBBAUGB//EAE4QAAEDAgIDCwYJCwIGAwAAAAEAAgMEERIhBTFBBgcTIlFUYXGBkdIUFyMyUpMzQnKSobGzwdEVJCU1YnR1grLT8HOUU4OitMLxNENE/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECAwQFBv/EADQRAQABAwMBBQYGAgMBAQAAAAABAgMRBBIxIQUTQVHwIjJhcYHRFJGhscHhI1IzQvFyFf/aAAwDAQACEQMRAD8A8qvkv00hVSUVUYKsJKBVSVblpiVb1qGZVOWmJUuW4c5UvWoc5UPW3OVL1uHOVLluGJVOWmEHLUMooyICAgICAgICAgICAgiUBAQEBEkQCiIICAgICD6Cviv0wUEUESrEJKJWoZlW5VmVblqGZVOW4YlS5ahzlS9bhzlS9bhzlQ9ahzlS5bhiVTlphW5ahmWEZEBAQEBAQEBAQEBAQRKAgICAiSIMFERQEBAQEH0FfFw/TIlXAKxAiVUlEqpKtysMSrctQzKpy1DEjKcuGIkMZqxO1X5BbNx6u2y3EOcyre6Eamvk6XEMHzRc/wDUtw5zlrvlZ/wm9jn3+klahzlQ9sZ1EsP7fGb84AEd3atuctWVhabEW29BHKDtC1DEqHLTCty1DMsIy2dHUhmlbGMsRzPINpXS1Rvqil209mb1yKI8Xo62qo6RwhFO2VwAxEhtxflJBudvavdcrs2Z2RTnzfavXtLpJ7qLcVT48fyg2ioaweh9BL7NrDtZqI6lIt2b0ex0n14fZmLGk1kf4vZq8v6+zhVGjJ45eBLCXn1cOYcOUHkXjqs1017Jjq+Vc0l6i53c09fD4u3DoWnpmCSseHOOpgvbqAGbvqXrjT27Ubrs/R9OjQ2NNTv1M5ny9c/szT6WopHiI0jWMcbBxa3WeUAZdhSm/ZqnbsxH0W3rNJcqi3NqIifHEev1crdDowU8tm3MbxibfWOUX22+8Lz6mz3VeI4nh4O0NLGnu4p4nrH2cxed4RAQEBBFAQEBARBBEojCAgICAg+gEr5GH6ZgpgEwIlVECtYZlBxVZlM0cpFxFIRyhjrd9lqIYmqPNXDE03e++BmsA2LnHUwHZexJOwA7bX1DFXk1qmZzzc2yFgBk1o2Bo2BahjDUetQxKl61DnKh625yiH5YXer9IPKP8zW3OVErbG3/AKVYVFaZRRl29yFvKf5D9y9ei/5H0+ycfiPpLT09fyqW/tnusLfQuWo/5avm8+vz+Jrz5tSmDy9ojvjvxcOu6505zG3l57cVzXGznwfRaZ5aGMmewzlptlmeWwX26ZxERVPtP2NuqaYppuTG/Dwmm2TCdwnOJ+w/FLdmHkC+RfiuK538vyuti7F6e95/j4fBpx+sLa7j61yjl5qeYel3Z+pBy2d9TF79dxT9f4fb7Y9219f4eYXz3wxAQEBBFAQEBARAoSgiCAgICAg9/dfKw/TCYBXAirhECjMtqZ/AcRuUo9d/xmu2sZ7JGonXe4FgM94c/e6zw0ZJHE4i5xdruSb96pMQjU1Ej7Y3ufbViN9evrOQ7hyKsYiOGs9h5F0iiWZplS+M8i1sliaZUvjPItRTLnNMqXxnkWoplzmmVL4nci1tliaJ8kXxOIGWYOHs1j71dsueyryUmF3J/hWsSmyryQ4J3ImJZ2VeTtbmaKcTtk4JwYLgk5C3RfXq2L16W3XFcVY6Ppdm6e9F6K9s483T0vuebJM6Z07YmvsbEZ3AAOZIGxd72liqua5qxEvdq+zYuXZuTXFMT9mxo/RVNSAzmTELABzrYRfktyrpbs27PtzP1ddPo7GkjvZqz8Z/hpVT9HyS8M6qkx3BBF7NtqA4mQXKqbFVe+a5z6+DzXZ0Vy73s3Zz+3y6OjU09NXMAbJiMZ9ZvrDlBuNRXaui3qI6Tw9ly1p9dRERVnHjHLlxbmGF4dHUteGuBIsL5HVcH7l540cZiaasvDR2TRuiaLkTifXErN19FNI5hZG58cbDm2xNyc+Lr1AbFrW266piYjpEN9rWLtyaZopzER4fbl5M/Uvmvz4gICDBQYQEBARJEESURhAQEBAQEHv18zD9MJgWQQOeTawDRdznGzWjlcf8J1C5ViEmcLC+FmTWGY+1IS1n8rGkHvd2Bawx7U89EPLnA3DIRbMWhZ94VSaPn+bUkJJJOZJuSddymFVOVZlW5awxKuXWesrc8yzVzLXerhylS8LTnKktJNgLkmwAFyScgANpViHOVjtE1XNqj3EnhWnKZhD8k1ViPJajZ/8ARJy/J6UzDnmFT9E1QFzTVAA1kwvAHWSMluOvQ5nEPRaO0K2mj4Z0MlTLsbHG5+E7BYDLrK+jFFvT07rnWX3KLFjRURcvdap4j7fdqVtbpSQ8WmqIm8jIJL9ri2/dZeevW11cTh4r3at+ufZ9mPh9/wDx1azRoqhC97Sx0Z47Xgh1iASCDmDcN717qrdN+KK3167FOsot3PLn183N3TxVMsjYmQSiFhADjG4RlxyviItYah2ry6m53tyLdPh+/wDT53aF2q/eixb4j9/6+6Ue48YeNMcX7LRhHfrXWNBGOtXV3p7Ejb7VfX5dGto+gq6So4sMszMg50UbnNLTqOQyPQvPTNWmu4qeO3v0GoxVx+8ebvQ6JYKo1LdT26rZ49pt05dt+Ve+LNMXe9jyfap0lEaidRHEx+vm4z6vSYlc9lPUlhcSGOp5C3Ds+LcZL5/42uK5mJ6eT4k9qXou1VUz0zxPk35KJtYy81NLSzDIPfE5oJ2cYgYh0HNemKrWqjHFXr83vpq0/aFOJjbX6/OHmJNCVYcWinmfYkYmRPcw22hwFiF86uNlU01cw+FdtVWq5oq5hH8jVfNan3EnhWd0OZ+RqvmtT7iTwpugalRC9jix7HRuGtr2lrhfVcHNUVlB6HdZV6LkbTDR1PLTuZDao4R2JrpDZ3FJJLiCXi+VxawsFIyPPKgiMEoIoggICAgICD35Xz8P0zMbC4hrRdziGgDWSTYBXBw2KyQD0TDeNh1jU9+ov6tYbyDpJvWaY8Z5ahUwqJVwkolXDKsrWGZVOVYlCUZnrK3MdZZq5lQ8I5yoeFqIc5el3q2g6ao758eU90ExH1JLhd91vbrN9PTMVfVQw1DI4oamaFjRBGbNje5guXAkkhtznrK3FMYeVyvO5p3nbf8Abw+FXbAhPvpaYmaYZ6lr4ZBgkaIImksdk4XDbjLkW7eKaol0s1xRcpqnwl1qndZpSjiD9HzNbA/jvAijeb2AxXc0m1gB0WXu1tqa8XI6xh9rtWxVdim/R1jHqfu5nnc07ztn+3h8K+dth8F1KbSdTVAVNY9r55rXOBjAbCzQWtABNhbsC+zpaNlqInxfq+zbc29PG6eWjpDd5pOSbySuqGvga8GwhjYMs2Ou1oNtX+BeC1TFm/ip8axH4XV4ueHj8/F1gb5jMHkX2X6qOvDl1O7quopOA0fOGYrcIODY8F+oDjA2IGu3L0L5WtmK7kUx4Pzfa1yLt6mijrMdPrPg6UNZUNPDCRorCTMHcGzCJSb4uDth9Y31a17Ytf4u7z1w+vFifw3c564cY77WngbGraCMiPJ4ciNfxV8TbD8hMTE4luUO7TTOkGmOpna+luC70ETblpDm4XBt9YGpezR2ZmuKo4h9TsvTV13YueEeLVl3ytJ0rjT0VS1lPGSADFG/jE3eQ5zSbXJXPVVU13ZmHHtG7Tc1FU08cfkh53NO87b/ALeHwrz7YeFg77mnudt/28PhTbA6O/ZVOndo6peG8LPo6OR5aLC7jiIHRdzrdalI+cMYCHHE1uEAgG+J1yBZtha4vfMjIHqWhBAQEREoMIggICAgICD368WH6ZtaOyc5+2ON7h8q2Fp6wXA9isQzXxhqJhoKuElByYREqspQU+MnjNY1rcbnOvYC4bqAJObmjIbVcM1ThJ1JFzmL3c39taw55ny/ZW+li5zF7ub+2qzVM+X7NWspcAaQ5sjHglrmhwBsSCLOAIII5NoViGM5aLwtMS9NvVD9NUnypf8At5lKnC77svLbtf1nXfv1T9s9bjh5HGVBB09E6blp8hx4/Zd9x2L0WdTXb6cw92k19zT9I60+X2deM6Pq3DiuhlcdQyudezin616Y/D3p4xPr6PoU/gdXVHTbVP6/w6ml9HzScFwD2N4E4rOvmbADMA7L969F61XVt2Tw92r0125s7qqI2+DX3R6HfOxsjWjhmCxFxZw2i55Dn3rGpsTciKo5cu0NFVfoiumPbj9XBZojSDRhDZA3kEoDe7EvF3GojpET+f8Ab5VOi11MbYicf/Ufd09zegHxv4WZuHD6rbg58uS9Ol0tVNW6uHt7O7Ort195djGOIdKCiqPKnVEj2BhGAMBJIaNWwC+s9q7027nezXVMY8ntosX/AMRN6uYxxEfBp6SpqCCV0k13PeeEDMyM+RoyzIOsrldosW6pqr5nrj1/Lzai1orFya7vWZ64/r7uTpTdFJK3g4m8DFqy9YjkuNQ6u9ea7q6q4209IeDVdp13I2W420/r/X0cReR8sQYdqPUqPoW+58Hor+FQ/U1Yp5HzxaGzo2s4CZkwjilMTg/BOzHC62x7bi4SYyKZpMTnOs1uJxdZgswXN7NGwDYkJKsoIoggICAgICAg+gFeXD9M2dH5l7fbieB1tGMf0W7VcM1+E/FqJhoKYREq4REq4SV9KOJN/oj7eBVirmPn/EtTgnEFwBLWkAkDIYtVzsvYq4SUtIUpY+SwdwbJXxBx1cUnK+02F1cMZzDFcPQQf83+sKuX/afo5jwqkvS71g/TNJ8qX/t5lKo6OF2PZl5Tdr+s679+qftnrUcPE4yoICDsblI8VS39lpP1L1aOM3X0eyqc6iPhCrdDO41chBIIcGixseKAPxWdRVPfVSx2hcn8VXMT8P0XaE05JFIOEe58bsjicTh6Rda0+omir2p6Omi7QrtV+3MzTPn4PQ1NHUPma+KocIH8YgHV0N6D9C9tVu5VXE01ezL7FyxfruxVbuTsn10+bl7ptNnFwELyAz13tcblw+KCNg29PUvPqtTOdlE8cy8HaWvnPdWp45mPPy+7z7Kh5e1znOcQ4HjOJ29K8cVTuiZl8mm5VNcTVMz1h6Ddq2/Av5WuH9J+8r266Pdl9btmM93V8J/h5lfPfEEBBh2o9So+hb7nweiv4VD9TVinkfPFoEBERKDCIICAgICAgIPoK4Yfpko5CxzXtyc1wcOsG4TCTGYwsrIQCJGD0Uly39k/GjPS2/aLHamEpnwnlrq4aRKuERIVwi+kHEm/0R9vArhzq5j5/wASjRPaw4jI+N2qzYhI1zTrDgXAEHkIITCVR4YNKztlJk4V73Ek4eBEcbQSScNnm2ZvqzJJJurhiKcdMKK0egg/5v8AWFYhj/tP0cx4VSYel3rR+maT5Uv2EylUdHnvR7EvJbtf1nXfv1T9s9I4eFxlQQEHW3LThlS2+QcC3tK9Wkqxdh9Dsu5FGojPj0Y3T0ro6l5IOGQ42nYbgXHXe6mqomm7OfE7Ss1UaiqZjpPWE9E7n5ZiHPBij5XCzj1BWzpaq+s9Ia0nZty9OaulP6/R2/y9TQObTsGKJowueDdoP/l0lev8VbomKI4830//ANDT2Kos0+7HSZ9c/FzdK7nTbhaX0kRzwg3cPk+0Pp61572k/wC1vrDxarsycd5p+tPl9vP93Go6V75WxhpxYhcWzAvnfkXmt0TVXFMPm2bVVdyKIjrl3d2kovFFfNjS49tgP6SvXrqutNPk+p2zVGaKPKPX7PNLwPiiAgw7UepUfQt9z4PRX8Kh+pqxTyPni0CAUEEZEBAQEBATILIIPoKzh+mEwLYJyy4sHMd6zHeqbatWYIubEZi55Te4SYykYI3ZxyBp9iY4XdknqHrOHqTCZmOY/L192PIJORtuUSRlvfisib6fWUfJmj4SVo6I7SO7wcH/AFX6FTM+Efx6/Iwuh41myRvGC+ZjeDY4TYgtdcA2yIICuGelXzVuqWc2h+dP/dVwm2fOf0+yt1Szm0Pzp/7yuEmmfOf0+zXqpy8NGFrGsBDWsxYRc3ObiSSSdpTDO3CowWGKS7Qcw347uobB0nsuq5z8Ho97FzTpil4uE4pbYScPwEusG5+lZq4cL0exLxW7X9Z1379U/bPUjh89xlQQEAEg3GRGYVInHWHfpt1c7W4XMZJbUTcHttrXsp1tcRiYiX1rfbF6mnFURLS0jp2onGFzg1h1tZkD1nWVyu6m5c6TPT4PNqO0L9+MTOI8oc1ed4m5o/Sk0B9G+w2tObD2fgutu9Xb92Xp0+ru2Pcnp5eDrO3XTWyjjDuXjW7r/evTOurxxD3z21dx7sZ+rg1E7pHF7yXOcbkleOqqapzPL5Vy5VcqmuqczKtZYEBBh2o9So+k76lKXxaKdjjjaNFwgukeB8Vupou538oOtc6R4IU1Ptqc/wBiF5b3uwn6FvqIihLvgpI5j7LSWv7GvAxHobdMjUc03w2OK+G1uNfVa3KiSudQyDJwaw8j5GNd2tc4EdqZFU0LmGzmlp1i+0coO0Iiu6BdAQEmQWQQFcD6CmH6YTAJgYIVwIpgCrgSimczNpIuLHkI5HA5EdaYZmmJ5SM7D60TeuMlh7s29zQrhnbPhKomL/hye9b/AG1cJifX/qDqi3qMazpAJd85xNj1WTDM0+bUkzNzmTmSdarMw9HvYD9MUvypfsJVmv3Zee/H+OfXi8Xu1/Wdd+/VP2z1iOHzHGVBAQEBAQEBAQEBAQEGHaj1Kj6FvufB6K/hUP1NWKeR88WgQbB0hJa1xiAwh5HpQ32Q/XbZy2yvbJMJLURF0M5aC0gPYc8Lr2vyi2YPVrQZ8qd8XCwfsNA+nWe0pgRNQ46yHfKAP060EbA6sjybOxBBTAKggIPoRVw/TMKggJgYIVwMJgYIVwIkK4TCBCYSYQIVZmFbgjMw9HvZD9L0vypfsJVmv3ZefUR/jn14vEbtf1nXfv1T9s9co4fJcZUEHX3KaDdX1cdI1wZwhzcdguATbtXSimKs54iMu9i1Fyqd09IiZn6eXzfTa3e00VDUupXGtk4OmdUF4njbctaXloZwWQsOVdKLG+3FcTzOHqt6CLlmLsVYzVFOPnOOWnS7hNEvFJdlaDWSPjNqpnEwyNjBHoeNfFfZqXSrSTG/2vdjPHPTLvX2Vt732/ciJ45zGfNVPuJ0S2Gabg60mGoEAb5UyzgQ84ieByPEOXSFY0czXTTu5jPHrzap7Izcoo38054+Xx+Laqd7/RDJqmHDWnyWATg+UxjHlGcJHA8X4UcuorFOlmaaas8zjj5/Zyo7M3W7de73pxxxz9m7o3ew0RMID+et4ePhD+cRnD6wsPRZ+oeTWvNdpm3XNPk8Gptdzdqt5zhlu9fokxtk/PeNIY7eUR5AAG9+C6Vz3S4ZWS71WiW8NnWngHBv/wAiPjXdhz9Fkm6R4nfM3Cs0X5PNBJJJT1bTYSlpkjeA12EuaAHAh2WXxTfYrTOVeGWgQYdqPUqPoW+58Hor+FQ/U1Yp5HzxaBBEoksIggICDKDLuXlz/FBFAQEH0NdMP0+BEYKuFwJgwwmDBZUwiQhhhXCIkJgQIVTCBCMzD0e9oP0vS/Kl+wlWLnuy8+pj/FV68YeE3a/rOu/fqn7Z64xw+M4yoINzRGk5qSZlRA7DJGQ4HWMjexG0ZBbpqmmcutq7NurMfKY84nwe9k32XSSmol0fE+Z0JgcWzyNYWuBaThsbGxI1qxdrpp2U8Zy7U6y5RR3dHSInMeefmph3zWNEAGjmfmjzJHepffE5wecXFzzAPYtTqLs7uvvct1do36t+Zj2oxPT4Y6ISb5Mbo5Ijo1mGaXh3fnUl8QvkDhyHGd39Ssam7FUVZjpGFjtK/FVNWYzEY4XTb6TXySynRseKoi4F9qmS2Hiji8XI8RnzetZi/diKac8Tn1+bFOvvU000xPSmcx08ev3lsUm+8YuDDNHR+gZwbb1Dzlnr4uZ4x71yrmquqap8Xnu3Krtc11cyN33nBgZ+To8LX8IPzh975DPi6sh3LG2XNJ+/E88JfR8XpiC784frBvlxcs802yPJbtN2NTpR8ZlayKKnbgiijuWtBtiJcc3OOFufRq131EYHnFQQYdqPUqPoW+58Hor+FQ/U1YpHzxaBBEoksIggICAgkdQ7UEUBMgp1Mvoa7v1AgIYEwMFXAWVwMIMEK4EUwYYIVTCBCI9FvbN/S1N0GUnoHAyC57SO9Yu+5Lzar/hq9eLe3SbzNZUVlRUxVdKGVE8k4EmMPHCPL8JABGWK2vO2zUvLFT4jm+YzSHPKLvk8Ku8PMZpDnlF3yeFN4eYzSHPKLvk8Kbw8xmkOeUXfJ4U3h5jNIc8ou+TwpvDzGaQ55Rd8nhTeHmM0hzyi75PCm8PMZpDnlF3yeFN4eYzSHPKLvk8Kbw8xmkOeUXfJ4U3h5jNIc8ou+TwpvDzGaQ55Rd8nhTeHmM0hzyi75PCm8DvF6Q55Rd8nhTeKN/KhNO/R8Bdj4GgbBiAsHGMhpIGzVe3SlI+YrYKCLkSWEQQEBBkC+SDLvoGSCKAjIg+i2Xow/VMEJgYQFQTAJgFVwxZFYIVwMvge1rXlrgx98Li0hrsJs7CdRscjZMJ0zh6bc3uHmqrSTPFNAbEE2MrgdrW/FHSe4rnXcinpDw39bRb9mnrP6PqWhNFUVEzBTtjbf1nEXkd8pxNyvLVVNXL5Ny9VcnNUun5RH7UfzR+KjmwJo9ZcwdGEW+tBgTx6y5g6LC31oMioj9qP5o/FBgzx39Zlh0D6roJGaP22djR+KBw8ftM+aPxQBUR7XRj+UfigcPH7TPmj8VBFk8ftM17QD96oNnjz4zO0D8UDh47+swg9Ay+lA4eO/rMN+gZdWaDLqiPY6M/yj8UDh4xqcw9BaPxQaelqKjq4jDUtiljdra5g7xnkekZoPi+7LeidHim0bJw7NfASOHCj/TebB46DY9JWoqMvlb2lpLXAtcCQQRYgjIgjYVpUHIksIggnHEXXtbLWS4NGerMkIM8FyuaOpwce5t0GC4ah2k6z+AQQQEZEBB9GXqfqhBhBghBiyKICuFFRJrCb2BNgXGwvYDMk9AQJZnlrWOe5zGXwNLiWtxG7sLTk25zNtaGIicvTU+7uSONsYp2EMa1l+EIvhAF/V6FymzEzy+ZX2dTVVM7ufgO3xZeas96fCs9zHm5z2dT/ALT+St2+TLzWP3rvCndR5szoKf8Aafy/tWd86Uf/AJI/eu8KndR5sToqf9v0Qdvozc0j967wqd38WJ0keaB31ZuZx+9d4VO7ZnTR5oHfYm5nH713hTYz3EeaJ325uZx++d4VNjPcx5onfcm5lH753hU2p3THnem5lH753hTaz3bHnem5lH753hTabDzvzcyj987wptNh535uZR++d4U2p3bHnfm5lH753hTad2eeCbmUfvneFNpsX0++xK9sh8jZijZwgaJXHE0OAf8AF2B2Lqa47FJg2Nfzwzcyj987wptk2Hnhm5lH753hTbKbWPPFNzKP3zvCmJNr5vWT8LI+Uixke6Sw1DE4utftVhpQ5ElFEEF0R4rx+y13aHtH/kUVSiCAiSIggIPo9l6n6vBZDDBVwYEwIlXCsICBZVYZVVhBgtQwrdGEwzNMKnwhTDE0QpfAFNrnNuFL6cKbXObal9Mptc5tKXU6ztc5tKnQKbWJtq3QKbWJtqzCphiaEDGmGZpQLFMM7US1TDO1jCmEwjZRE6ad0bw9tsTTfMXBvkQRtBBII2glEw2X0Il41MC6+ZhveZnKGjXK3kIueUDWZnHKOe/ikh3FIyIORB5CCqy2YtHvID3+hiOeOQEAj9huuQ/J7ba1JkTMkD/RhgiaMmSG+O/LNbItPQOLla9jfPUac8TmOLHDC4ax15g32gjMEZFVJVIggvthjz1yWty4Abk9RIHzSgoQEBEkRBAQfR17H6vIhkQLIrCDBCAqMqrDCKEIqKKwURAhGZhU4IzKpwUlzlU4KMSpeFmXOVTkc5UuUc5VOWZYlWVGJVlJYlByyzKBRmUSssyiURFwRGyNJ1IFhUTgarCV9rd6mIZlqyvLnFziXOOZLiS49ZOZREUF7Knihj28Iwahez239h2wdBBHRfNRJRc2DY+UdBjafpxi/cE6hjjb6rS88slg35g+8kdCIpkeXEuJuTtKCKAgIyICDF0H0hex+qEBFgRWFcAgKgjUCKIqJQRKIg5ElW5GJVuUliVLlGJUuUlzlS5RzlU5SXOVTlJc5VuWWZVuRiVblliUSjMoFRmUSoiLkRhGZYKIwoMFRJRRBAQEBARkQCgwg//Z"
            etiqueta="Framework de Utilidades"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;