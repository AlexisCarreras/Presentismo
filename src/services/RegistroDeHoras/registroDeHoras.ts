import axios from 'axios'; 

export default async function RegistroDeHoras() {
   
    try {
        const response = await axios({
          url: 'https://presentismocda.herokuapp.com/registroHoras',
          method: 'post', 
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          data: { 
              usuario: 'fruiz',
              fecha: '2021-11-17 14:13:03',
              messageid: '202111011413039992',
              data: {
                usuario: 'fruiz',
                dia: '2021-12-01'
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