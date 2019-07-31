<template>
<div>
  <v-simple-table>
    <thead>
      <tr>
        <th class="text-left">No</th>
        <th class="text-left">Id Order</th>
        <th class="text-left">Email</th>
        <th class="text-left">Status</th>
        <th class="text-left">Update</th>
        
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in track" :key="item.name">
        <td>{{ item.no }}</td>
        <td>{{ item.id }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.status }}</td>
        <td><v-btn dark @click="gotoUpdate()">Update Data</v-btn></td>
      </tr>
    </tbody>
  </v-simple-table>
  
</div>
</template>

<script>
  export default {
      methods: {
    gotoUpdate() {
      this.$router.push("/navigation/update");
    },
      },
    data () {
      return {
        track: [
          {
            no: '1',
            id: '123',
            email: 'Frozen Yogurt',
            status: 'terkirim',
          },
          
        ],
      }
    },

  }
</script>
