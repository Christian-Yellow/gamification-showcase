<template>
  <q-page padding class="max-width-page">
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="row q-mb-sm">
          <div class="col-8">
            <div class="text-subtitle1">Balance</div>
            <div class="text-weight-bold text-h5" data-cy="balance">
              $1,234.56
            </div>
          </div>
          <div class="col-4">
            <div class="text-subtitle1">Status</div>
            <div class="text-weight-bold text-h5 text-positive" data-cy="status">
              Active
            </div>
          </div>
        </div>
        <div class="text-caption" data-cy="status-warning">
          Your balance will be paid out daily unless your wallet is locked.
        </div>
      </q-card-section>
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

    <!-- Commissions -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-subtitle1">Total earned</div>
        <div class="text-weight-bold text-h5 text-positive" data-cy="total-earned">
          $12,345.67
        </div>
        <span class="text-caption">Taxes are withheld from your earnings.</span>
        <q-expansion-item label="View earnings" data-cy="earnings-toggle">
          <q-table
            flat
            bordered
            :rows="earningsRows"
            :columns="earningsColumns"
            :pagination="{ rowsPerPage: 20 }"
            :hide-pagination="true"
            :dense="true"
            row-key="id"
            data-cy="earnings-table"
          >
            <template #body-cell-total="props">
              <q-td :props="props">
                <strong>{{ props.row.total }}</strong>
              </q-td>
            </template>
          </q-table>
        </q-expansion-item>
      </q-card-section>
    </q-card>

    <!-- Payments -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-subtitle1">Total paid</div>
        <div class="text-weight-bold text-h5 text-positive" data-cy="total-paid">
          $10,000.00
        </div>
        <q-expansion-item label="View payments" data-cy="payment-toggle">
          <q-table
            flat
            bordered
            :rows="paymentRows"
            :columns="paymentColumns"
            :pagination="{ rowsPerPage: 20 }"
            :hide-pagination="true"
            :dense="true"
            row-key="id"
            data-cy="payments-table"
          >
            <template #body-cell-total="props">
              <q-td :props="props">
                <strong>{{ props.row.total }}</strong>
              </q-td>
            </template>
          </q-table>
        </q-expansion-item>
      </q-card-section>
    </q-card>

    <!-- Leaderboard -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-subtitle1">Leaderboard (Last 7 Days)</div>
        <div class="text-weight-bold text-h6 text-primary q-mb-md" data-cy="current-rank">
          Your Rank: #3
        </div>
        <q-table
          flat
          bordered
          :rows="leaderboardRows"
          :columns="leaderboardColumns"
          :pagination="{ rowsPerPage: 10 }"
          :hide-pagination="true"
          :dense="true"
          row-key="id"
          data-cy="leaderboard-table"
        >
          <template #body-cell-rank="props">
            <q-td :props="props">
              <div class="row items-center">
                <q-icon
                  v-if="props.row.isCurrentUser"
                  name="person"
                  class="text-green q-mr-sm"
                />
                <span :class="{ 'text-weight-bold text-green': props.row.isCurrentUser }">
                  #{{ props.row.rank }}
                </span>
              </div>
            </q-td>
          </template>
          <template #body="props">
            <q-tr :props="props" :class="{ 'bg-green-1': props.row.isCurrentUser }">
              <q-td v-for="col in props.cols" :key="col.name" :props="props">
                {{ col.value }}
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

// Static data for tasks
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

// Static data for earnings
const earningsRows = ref([
  {
    id: 1,
    date: '2024-04-10',
    amount: '$1,234.56',
    customer: 'Acme Corp',
    total: '$1,234.56'
  },
  {
    id: 2,
    date: '2024-04-09',
    amount: '$2,345.67',
    customer: 'XYZ Inc',
    total: '$3,580.23'
  }
])

const earningsColumns = [
  { name: 'date', label: 'Date', field: 'date', align: 'left' },
  { name: 'amount', label: 'Amount', field: 'amount', align: 'left' },
  { name: 'customer', label: 'Customer', field: 'customer', align: 'left' },
  { name: 'total', label: 'Total', field: 'total', align: 'left' }
]

// Static data for payments
const paymentRows = ref([
  {
    id: 1,
    date: '2024-04-01',
    earnings: '$3,000.00',
    paid: '$2,400.00',
    total: '$2,400.00'
  },
  {
    id: 2,
    date: '2024-03-01',
    earnings: '$3,000.00',
    paid: '$2,400.00',
    total: '$4,800.00'
  }
])

const paymentColumns = [
  { name: 'date', label: 'Date', field: 'date', align: 'left' },
  { name: 'earnings', label: 'Earnings', field: 'earnings', align: 'left' },
  { name: 'paid', label: 'Paid', field: 'paid', align: 'left' },
  { name: 'total', label: 'Total', field: 'total', align: 'left' }
]

// Static data for leaderboard
const leaderboardRows = ref([
  {
    id: 1,
    rank: 1,
    name: 'John Smith',
    sales: 15,
    earnings: '$5,678.90',
    isCurrentUser: false
  },
  {
    id: 2,
    rank: 2,
    name: 'Sarah Johnson',
    sales: 12,
    earnings: '$4,567.89',
    isCurrentUser: false
  },
  {
    id: 3,
    rank: 3,
    name: 'You',
    sales: 10,
    earnings: '$3,456.78',
    isCurrentUser: true
  }
])

const leaderboardColumns = [
  { name: 'rank', label: 'Rank', field: 'rank', align: 'left' },
  { name: 'name', label: 'Name', field: 'name', align: 'left' },
  { name: 'sales', label: 'Sales', field: 'sales', align: 'left' },
  { name: 'earnings', label: 'Earnings', field: 'earnings', align: 'left' }
]
</script>

<style>
.q-expansion-item .q-item {
  padding-right: 0;
  padding-left: 0;
}
</style> 