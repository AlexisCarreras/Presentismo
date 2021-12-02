import axios from 'axios'; 

export default async function IniciarDia() {

  try {
    const response = await axios({
      url: 'https://presentismocda.herokuapp.com/inicio',
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      data: {
        usuario: 'fruiz',
        fecha: '2021-12-01 22:50:00',
        messageid: '20214000900009992',
        data: {
            usuario: 'fruiz',
            hora: '2021-12-01 22:50:00.000',
            idLugarTrabajo:1,
            idTipoHora:1
        },
        message: '',
        code: ''
      }
    }) 
    console.log(response);
    
    return response;
  }
  catch (e) {
    console.log(e)
  }
  
}
