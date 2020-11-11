<template>
  <v-app>
    <v-app-bar app color="white" dark>
      <h1>Navita</h1>
    </v-app-bar>

    <v-main>
      <div class="veiculos mt-8 ml-4">
        <h1>Veículos</h1>
        <v-row align="center" class="flex-column ma-4" no-gutters>
            <v-card width="90%" class="carros mb-10">
              <v-app-bar>
                <h2>Marcas</h2>
              </v-app-bar>
              <v-simple-table fixed-header height="300px" :key="carro.codigo">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Nome
                      </th>
                      <th class="text-left"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="carro in cars" :key="carro.nome">
                      <td>{{ carro.nome }}</td>
                      <td><v-btn color="blue" text @click="loadModels(carro.codigo)">Ver Modelos</v-btn>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>

            <v-card v-if="models.length > 0" width="90%" class="modelos mt-10">
              <v-app-bar>
                <h2>Modelos</h2>
              </v-app-bar>
              <v-simple-table fixed-header height="300px" :key="modelo.codigo">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Nome
                      </th>
                      <th class="text-left">
                        Codigo
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="modelo in models" :key="modelo.codigo">
                      <td>{{ modelo.nome }}</td>
                      <td>{{ modelo.codigo }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>
        </v-row>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    cars: [],
    models: [],
    carro: {
      nome: '',
      codigo: ''
    },
    modelo: {
      nome: '',
      codigo: ''
    }
  }),

  created() {
    this.loadCars()
  },

  methods: {
    loadCars() {
      this.$http.get('marcas').then((res) => {
        this.cars = res.data
        console.log(res.data)
      })
    },

    loadModels(id) {
      console.log('esse é o id: ' + id)
      this.$http.get(`marcas/${id}/modelos`).then((res) => {
        this.models = res.data.modelos
        console.log(res.data.modelos)
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  header {
    h1 {
      color: rgb(52, 207, 161);
    }
  }
  .v-main {
    background-color: rgb(207, 207, 207);
    .veiculos {
      h1 {
        color: rgb(63, 62, 62);
      }
      .row {
        .v-card {
          .v-app-bar {
            h2 {
              color: blue;
            }
          }
          .v-data-table {
            table {
              tbody {
                tr {
                  td {
                    .v-btn {
                      text-transform: none;
                      :hover {
                        color: rgb(52, 207, 161);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
