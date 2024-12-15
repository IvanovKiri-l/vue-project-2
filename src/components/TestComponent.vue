<script setup>

import {ref} from "vue";
import {tradeDays} from "../api/tradeDays.js";
import {fetchCompanies} from "../api/fetchCompanies.js";

const trades = ref(null)

const handleFetchTradeDays = () => {
  tradeDays().then((res) => {
    trades.value = res
    console.log(res)
  })
}

const companies = ref (null)

const handleFetchCompanies = () => {
  fetchCompanies().then((res) => {
    companies.value = res.data
    console.log(companies.value)
  })
}

</script>

<template>
  <div class="main-wrapper">
    <div> tradeDays {{ trades }}</div>
    <Button severity="info" @click="handleFetchTradeDays">Fetch</Button>
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th>Дата</th>
        <th>Кол-во лотов</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(t, i) in trades" v-bind:key="i">
        <td>{{ i }}</td>
        <td>{{ t.date }}</td>
        <td>{{ t.count }}</td>
      </tr>
      </tbody>
    </table>
    <hr/>
    <button severity="info" @click="handleFetchCompanies">Fetch Companies</button>
    <table>
      <thead>
      <tr>
        <th>Индекс</th>
        <th>Айдишка</th>
        <th>Название компании</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(t, i) in companies" v-bind:key="i">
        <td>{{ i }}</td>
        <td>{{ t.id }}</td>
        <td>{{ t.name }}</td>
      </tr>
      </tbody>
    </table>




  </div>
</template>