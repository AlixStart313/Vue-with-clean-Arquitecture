<template>
  <div>
  <b-row>
  <b-col cols="12" md="4"></b-col>
    <b-col cols="12" md="4">
      <b-form>
        <b-form-group
        description="nombre de la persona a registar"
        label="Name"
        label-for="inputName"
        /> 
          <b-form-input id="inputname" v-model="Person.name"></b-form-input>  
        <b-form-group
        description="nombre del trabajo"
        label="Name"
        label-for="inputJob"
        />
        <b-form-input id="inputjob" v-model="Person.job"></b-form-input>  
      </b-form>
    </b-col>
      <b-col cols="12" md="4"></b-col>
  </b-row>
    <h1>{{valueX}}</h1>
    <code>{{Person}}</code>
  </div>
</template>

<script lang="ts" >
import Vue from "vue";
import { Person} from "./../../entities/person";

export default Vue.extend({
    name:'IndexPersonVue',
    data(){
        return {
            valueX:'Este valor esta aquí' as string,
            Person:{
              name:'',
              job:''
            } as Person
        }
    }
})
</script>

<style>

</style>