<template>
  <q-page padding class="max-width-page">
    <!-- Available Spins -->
    <div class="text-center q-mb-lg">
      <q-chip
        size="lg"
        icon="casino"
        color="primary"
        text-color="white"
        class="text-h6"
      >
        Spins Available: 3
      </q-chip>
      <div class="text-grey-7 q-mt-sm">
        [Toast simulation: +1 Spin added for recent sale]
      </div>
    </div>

    <!-- Spinner Section -->
    <q-card class="q-mb-lg text-center">
      <q-card-section>
        <div class="text-h5 q-mb-md">Spin & Win!</div>
        <!-- Spinner Button -->
        <q-btn
          round
          size="xl"
          color="accent"
          class="spin-button q-my-lg"
        >
          <q-icon name="fas fa-dharmachakra" size="4em" />
          <div class="text-caption q-mt-sm">Tap to Spin</div>
        </q-btn>

        <!-- Prize List -->
        <div class="row justify-center q-mt-md text-body2">
          <div class="col-auto q-mx-sm">
            <q-chip color="positive" text-color="white">$1</q-chip>
          </div>
          <div class="col-auto q-mx-sm">
            <q-chip color="positive" text-color="white">$5</q-chip>
          </div>
          <div class="col-auto q-mx-sm">
            <q-chip color="info" text-color="white">Data</q-chip>
          </div>
          <div class="col-auto q-mx-sm">
            <q-chip color="grey" text-color="white">Try Again</q-chip>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Spin Result -->
    <q-card class="q-mb-lg bg-positive text-white text-center">
      <q-card-section>
        <div class="text-h6">Result: You won $5 Bonus!</div>
        <div class="text-subtitle2">Keep spinning for more chances to win!</div>
      </q-card-section>
    </q-card>

    <!-- Accumulated Rewards -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="row items-center justify-between">
          <div class="col-auto">
            <div class="text-h6">Your Spin Rewards</div>
            <div class="text-h5 text-positive q-mt-sm">
              Total Won: $12
            </div>
          </div>
          <div class="col-auto">
            <q-btn
              color="primary"
              label="Claim Data Voucher"
              icon="redeem"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Recent Spins -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6">Recent Spins</div>
      </q-card-section>
      <q-list padding separator>
        <q-item v-for="spin in recentSpins" :key="spin.id">
          <q-item-section>
            <q-item-label>{{ spin.datetime }}</q-item-label>
            <q-item-label caption>
              <span :class="spin.won ? 'text-positive' : 'text-grey'">
                {{ spin.result }}
              </span>
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon
              :name="spin.won ? 'emoji_events' : 'refresh'"
              :color="spin.won ? 'amber' : 'grey'"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>

    <!-- Top Winners -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6">Top Spin Wins Today</div>
      </q-card-section>
      <q-list padding separator>
        <q-item v-for="winner in topWinners" :key="winner.id">
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">
              {{ winner.country }}
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ winner.name }}</q-item-label>
            <q-item-label caption>
              Won {{ winner.amount }}
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-chip
              color="positive"
              text-color="white"
              size="sm"
            >
              {{ winner.amount }}
            </q-chip>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>

    <!-- Tasks -->
    <q-card class="q-mb-lg" data-cy="tasks-card">
      <q-card-section>
        <div class="row">
          <div class="col-8">
            <div class="text-subtitle1">Tasks outstanding</div>
            <div class="text-weight-bold text-h5 text-negative" data-cy="tasks-outstanding">
              2
            </div>
          </div>
        </div>
        <q-table
          flat
          bordered
          :rows="taskRows"
          :columns="taskColumns"
          :pagination="{ rowsPerPage: 20 }"
          :hide-pagination="true"
          :dense="true"
          row-key="id"
          class="q-mt-md"
          data-cy="tasks-table"
        >
          <template #body-cell-link="props">
            <q-td :props="props">
              <q-btn
                class="bg-accent"
                :href="props.row.link"
                target="_blank"
                :data-cy="`rep-incentive-link-${props.row.id}`"
                size="xs"
                flat
              >
                View task
              </q-btn>
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const recentSpins = ref([
  {
    id: 1,
    datetime: 'Apr 14, 10:30 AM',
    result: 'Won $5',
    won: true
  },
  {
    id: 2,
    datetime: 'Apr 14, 09:15 AM',
    result: 'Try Again',
    won: false
  },
  {
    id: 3,
    datetime: 'Apr 14, 09:00 AM',
    result: 'Won Data Bundle',
    won: true
  },
  {
    id: 4,
    datetime: 'Apr 13, 05:45 PM',
    result: 'Won $1',
    won: true
  }
])

const topWinners = ref([
  {
    id: 1,
    name: 'John D.',
    country: 'UG',
    amount: '$20'
  },
  {
    id: 2,
    name: 'Sarah P.',
    country: 'KE',
    amount: '$10'
  },
  {
    id: 3,
    name: 'Michael R.',
    country: 'TZ',
    amount: '$8'
  }
])

// Tasks data
const taskRows = ref([
  {
    id: 1,
    name: 'Complete Training Module',
    status: 'Outstanding',
    link: '#',
    lastUpdated: '2024-04-10'
  },
  {
    id: 2,
    name: 'Submit Monthly Report',
    status: 'Outstanding',
    link: '#',
    lastUpdated: '2024-04-09'
  }
])

const taskColumns = [
  { name: 'name', label: 'Name', field: 'name', align: 'left' },
  { name: 'status', label: 'Status', field: 'status', align: 'left' },
  { name: 'link', label: 'Link', field: 'link', align: 'left' }
]
</script>

<style scoped>
.spin-button {
  width: 150px;
  height: 150px;
  transition: transform 0.3s ease;
}

.spin-button:hover {
  transform: rotate(15deg);
}

.q-card {
  border-radius: 8px;
}
</style> 