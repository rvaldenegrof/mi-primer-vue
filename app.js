Vue.component("app-usuarios", {
    template: `
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Run</th>
                    <th scope="col">Fecha de Nacimiento</th>
                    <th scope="col">Edad</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(persona, $index) in personas" :key="$index">
                    <td>{{ $index }}</td>
                    <td>{{ persona.nombre }}</td>
                    <td>{{ persona.apellido }}</td>
                    <td>{{ persona.run }}</td>
                    <td>{{ persona.fec_nacimiento }}</td>
                    <td>{{ persona.edad }}</td>
                </tr>

            </tbody>
        </table>

        <!--
        <button class="btn btn-primary" @click="borrarUltimo"> Borrar el último </button>
        <br />
        <input type="text" placeholder="Nombre" v-model="nuevaPersona.nombre" />
        <input type="text" placeholder="Apellido" v-model="nuevaPersona.apellido" />
        <input type="text" placeholder="Run" v-model="nuevaPersona.run" />
        <input type="text" placeholder="Fecha de nacimiento" v-model="nuevaPersona.fec_nacimiento" />
        <input type="number" placeholder="Edad"v-model.number="nuevaPersona.edad" />

        <button class="btn btn-secondary" @click="agregarPersona">Agregar Persona</button> 
        -->

    </div>
    `,
    data: () => ({
        nuevaPersona: {
            nombre: "",
            apellido: "",
            run: "",
            fec_nacimiento: "",
            edad: 0
        },
        personas: [
            { nombre: "Claudio", apellido: "aaaaa", run: "17304007-5", fec_nacimiento: "10/10/1991", edad: 20 },
            { nombre: "Esteban", apellido: "bbbb", run: "17304007-5", fec_nacimiento: "10/10/1991", edad: 20 },
            { nombre: "Luis", apellido: "cccc", run: "17304007-5", fec_nacimiento: "10/10/1991", edad: 20 },
            { nombre: "Betsi", apellido: "ddddd", run: "17304007-5", fec_nacimiento: "10/10/1991", edad: 20 },
        ],
    }),

    methods: {
        borrarUltimo(){
            this.personas.pop();
        },
        agregarPersona(){
            this.personas.push({ ...this.nuevaPersona});
        },
    },
    //En caso de requerir buscar el listado de personas a una api
/*     mounted() {
        fetch("https://run.mocky.io/v3/85aef1fa-00af-45db-8146-0724a3654386")
          .then((response) => response.json())
          .then((json) => (this.personas = json));
      }, */
});

new Vue({
    el: '#app'
});