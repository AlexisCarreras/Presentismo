import axios from 'axios'; 

const body = {
    'usuario': 'fruiz',
    'fecha': '2021-11-17 14:13:03',
    'messageid': '202111011413039992',
    'data': {
        'usuario': 'fruiz',
        'dia': '2021-12-01'
    },
    'message': '',
    'code': ''
}

export default async function RegistroDeHoras() {
   
    try {
        const response = await axios({
          url: 'https://presentismocda.herokuapp.com/finalizarDia',
          method: 'get', //cambiar por POST
          data: { body }
        }) 
        console.log(response);
        
        return response;
      }
      catch (e) {
        console.log(e)
      }

    // axios.get('https://presentismocda.herokuapp.com/registroHoras', body )
    // .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    // })
    // .catch(error => {
    //     console.error(error);
    // });
    
} 