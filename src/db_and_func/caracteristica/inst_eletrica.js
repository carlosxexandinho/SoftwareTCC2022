export default (arg) => {

     switch(parseInt(arg)){
          case 1:
               return [
                    {
                         banco: 'SEDOP',
                         descricao: 'Quadro de mediçao bifasico (c/ disjuntor)',
                         und: 'UN',
                         valorUnit: '582.08',
                         calc: (params) => {
                              return 1
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Centro de distribuiçao p/ 12 disjuntores (c/ barramento)',
                         und: 'UN',
                         valorUnit: '395.13',
                         calc: (params) => {
                              return 1
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Disjuntor 1P - 6 a 32A - PADRÃO DIN',
                         und: 'UN',
                         valorUnit: '22.45',
                         calc: (params) => {
                              return parseFloat(params.quantAmbientes)
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Disjuntor 3P - 10 a 50A - PADRÃO DIN',
                         und: 'UN',
                         valorUnit: '341.82',
                         calc: (params) => {
                              return 1
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Cabo de cobre 2,5mm2 - 750 V',
                         und: 'm',
                         valorUnit: '7.20',
                         calc: (params) => {
                              /*
                                   - para cada ambiente considerado 8 metros de cabo para interrupitores
                                   - simples, considerando fio de fase e retorno.
                                   - totalizando 8 metros de cabo
                              */
                              return parseFloat(params.quantAmbientes * 8)
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Interruptor 1 tecla simples (s/fiaçao)',
                         und: 'UN',
                         valorUnit: '15.85',
                         calc: (params) => {
                              return parseFloat(params.quantAmbientes)
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Tomada 2P+T 10A (s/fiaçao)',
                         und: 'UN',
                         valorUnit: '25.17',
                         calc: (params) => {
                              var quant = 0;
                              (params.nomesAmbientes).forEach( e => {
                                   switch (e) {
                                        case 'Dormitorio':
                                        case 'Suite':
                                        case 'Suite Master':
                                        case 'Sala de Estar':
                                             quant += 4
                                        break;
                                        case 'Banheiro':
                                        case 'Banheiro Social':
                                             quant += 0;
                                        break;
                                        case 'Cozinha':
                                             quant += 3;
                                        break;
                                        default:
                                             quant += 2
                                   }
                              });
                              return parseFloat(quant)
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Ponto de luz / força (c/tubul., cx. e fiaçao) ate 200W',
                         und: 'Pt',
                         valorUnit: '232.25',
                         calc: (params) => {
                              var quant = 0;
                              (params.nomesAmbientes).forEach( e => {
                                   switch (e) {
                                        case 'Dormitorio':
                                        case 'Suite':
                                        case 'Suite Master':
                                        case 'Sala de Estar':
                                             quant += 4
                                        break;
                                        case 'Banheiro':
                                        case 'Banheiro Social':
                                             quant += 0;
                                        break;
                                        case 'Cozinha':
                                             quant += 3;
                                        break;
                                        default:
                                             quant += 2
                                   }
                              });
                              return parseFloat(quant)
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Ponto p/ar condicionado(tubul.,cj.airstop e fiaçao)',
                         und: 'Pt',
                         valorUnit: '490.69',
                         calc: (params) => {
                              var quant = 0;
                              (params.nomesAmbientes).forEach( e => {
                                   switch (e) {
                                        case 'Dormitorio':
                                        case 'Suite':
                                        case 'Suite Master':
                                             quant += 1
                                        break;
                                        
                                        default:
                                             quant += 0
                                   }
                              });
                              return parseFloat(quant)
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Lâmpada de Led Tubular 18W bivolt',
                         und: 'UN',
                         valorUnit: '23.76',
                         calc: (params) => {
                              var quant = 0;
                              (params.nomesAmbientes).forEach( e => {
                                   switch (e) {
                                        case 'Banheiro':
                                        case 'Banheiro Social':
                                        case 'Hall':
                                             quant += 1
                                        break;
                                        
                                        default:
                                             quant += 2
                                   }
                              });
                              return parseFloat(quant)
                         }
                    },
               ]
          break;

          default:
               return []
     }

}