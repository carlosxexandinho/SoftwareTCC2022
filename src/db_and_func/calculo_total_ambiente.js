import { computed, ref } from "vue";
import CUB_EQUIV from './CubEquiv'


const COEF_PAREDE = 1.1; // coeficiente de area de parede

const ambientes = ref([
     { id: 1, nome: 'Dormitorio', ladoA: '3.00', ladoB: '3.00' },
     { id: 2, nome: 'Suite', ladoA: '3.50', ladoB: '3.00' },
     { id: 3, nome: 'Area de Serviço', ladoA: '1.80', ladoB: '3.00' },
     { id: 4, nome: 'Banheiro', ladoA: '1.30', ladoB: '2.30' },
     { id: 5, nome: 'Banheiro Social', ladoA: '1.20', ladoB: '2.20' },
     { id: 6, nome: 'Sala de Estar', ladoA: '3.00', ladoB: '2.5' },
     { id: 7, nome: 'Sala de Jantar', ladoA: '3.00', ladoB: '3.00' },
     { id: 8, nome: 'Cozinha', ladoA: '3.00', ladoB: '2.00' },
     { id: 9, nome: 'Hall', ladoA: '2.00', ladoB: '2.00' },
     { id: 10, nome: 'Garagem Coberta', ladoA: '3.50', ladoB: '5.00' },
 ]); 


 const deleteAmbiente = (id) => {
     var data = ambientes.value
     var new_amb = data.filter((obj) => {
         if(obj.id != id) return true
     })
     ambientes.value = new_amb
 }
 
 const pesquisar_coef = (search) => {
     return CUB_EQUIV.filter((obj) =>{
         if(obj.ambiente == search) return true
     });
 }


 const addAmbiente = () => {
     //console.log(ambientes.value);
     ambientes.value.push({
         id: (ambientes.value.length +1), nome: '', ladoA: '', ladoB: ''
     })
 }

 const resultTotalAmb = computed(() => {
     var dados = ambientes.value;
     var total = 0; // area total
     var total_equiv = 0; // area equivalente
 
     dados.forEach(element => {
         var multiplicacao = Number(element.ladoA.replace(/,/g, '.')) * Number(element.ladoB.replace(/,/g, '.'));
         var pesquisa = pesquisar_coef(element.nome);
         if(pesquisa.length > 0){
            total_equiv += pesquisa[0].coef * multiplicacao
         }
         total += multiplicacao
     });
 
     return {
         areatotal: (total * COEF_PAREDE).toFixed(2),
         areaequivalente: (total_equiv * COEF_PAREDE).toFixed(2),
     }
 })

 export { ambientes, resultTotalAmb, deleteAmbiente, addAmbiente }