var CablesDePruebaCount = 0;
      var CaimanesCount = 0;
      var CautinCount = 0;
      var FuenteCount = 0;
      var MultimetroCount = 0;
      var OsciloscopioCount = 0;
      var ProtoboardCount = 0;
      var TransformadorCount = 0;
      var VelizCount = 0;

      CablesDePrueba = document.getElementById("CablesDePrueba");
      CablesDePrueba.value = CablesDePruebaCount;
      Caimanes = document.getElementById("Caimanes");
      Caimanes.value = CaimanesCount;
      Cautin = document.getElementById("Cautin");
      Cautin.value = CautinCount;
      Fuente = document.getElementById("Fuente");
      Fuente.value = FuenteCount;
      Multimetro = document.getElementById("Multimetro");
      Multimetro.value = MultimetroCount;
      Osciloscopio = document.getElementById("Osciloscopio");
      Osciloscopio.value = OsciloscopioCount;
      Protoboard = document.getElementById("Protoboard");
      Protoboard.value = ProtoboardCount;
      Transformador = document.getElementById("Transformador");
      Transformador.value = TransformadorCount;
      Veliz = document.getElementById("Veliz");
      Veliz.value = VelizCount;
      
      

      


    

    /**
     * CablesDePrueba
     */
      function CablesDePruebaAdd(){
          CablesDePruebaCount =CablesDePruebaCount+1;
          CablesDePrueba.value = CablesDePruebaCount;
      }
      function CablesDePruebaRemove(){
          if(CablesDePruebaCount > 0){
            CablesDePruebaCount =CablesDePruebaCount-1;
            CablesDePrueba.value = CablesDePruebaCount;
          }
      }

/**
     * Caimanes
     */

    function CaimanesAdd(){
      CaimanesCount =CaimanesCount+1;
      Caimanes.value = CaimanesCount;
      }
      function CaimanesRemove(){
          if(CaimanesCount > 0){
            CaimanesCount =CaimanesCount-1;
            Caimanes.value = CaimanesCount;
          }
      }


      function CautinAdd(){
        CautinCount =CautinCount+1;
        Cautin.value = CautinCount;
        }
        function CautinRemove(){
            if(CautinCount > 0){
              CautinCount =CautinCount-1;
              Cautin.value = CautinCount;
            }
        }





        function FuenteAdd(){
          FuenteCount =FuenteCount+1;
          Fuente.value = FuenteCount;
          }
          function FuenteRemove(){
              if(FuenteCount > 0){
                FuenteCount =FuenteCount-1;
                Fuente.value = FuenteCount;
              }
          }


          function MultimetroAdd(){
            MultimetroCount =MultimetroCount+1;
            Multimetro.value = MultimetroCount;
            }
            function MultimetroRemove(){
                if(MultimetroCount > 0){
                  MultimetroCount =MultimetroCount-1;
                  Multimetro.value = MultimetroCount;
                }
            }


            function OsciloscopioAdd(){
              OsciloscopioCount =OsciloscopioCount+1;
              Osciloscopio.value = OsciloscopioCount;
              }
              function OsciloscopioRemove(){
                  if(OsciloscopioCount > 0){
                    OsciloscopioCount =OsciloscopioCount-1;
                    Osciloscopio.value = OsciloscopioCount;
                  }
              }
      
              function ProtoboardAdd(){
                ProtoboardCount =ProtoboardCount+1;
                Protoboard.value = ProtoboardCount;
                }
                function ProtoboardRemove(){
                    if(ProtoboardCount > 0){
                      ProtoboardCount =ProtoboardCount-1;
                      Protoboard.value = ProtoboardCount;
                    }
                }


                function TransformadorAdd(){
                  TransformadorCount =TransformadorCount+1;
                  Transformador.value = TransformadorCount;
                  }
                  function TransformadorRemove(){
                      if(TransformadorCount > 0){
                        TransformadorCount =TransformadorCount-1;
                        Transformador.value = TransformadorCount;
                      }
                  }



                  function VelizAdd(){
                    VelizCount =VelizCount+1;
                    Veliz.value = VelizCount;
                    }
                    function VelizRemove(){
                        if(VelizCount > 0){
                          VelizCount =VelizCount-1;
                          Veliz.value = VelizCount;
                        }
                    }