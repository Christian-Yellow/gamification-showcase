<template>
  <q-page padding class="max-width-page">
    <!-- Weekly Draw Section -->
    <div class="text-center q-mb-lg">
      <q-chip
        size="lg"
        icon="local_activity"
        color="primary"
        text-color="white"
        class="text-h6"
      >
        Your Tickets: 15
      </q-chip>
      <div class="text-grey-7 q-mt-sm">
        [Toast simulation: +1 Ticket added for recent sale]
      </div>
    </div>

    <!-- Balance & Status Card -->
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

    <!-- Weekly Draw Prize Card -->
    <q-card class="q-mb-md bg-primary text-white text-center">
      <q-card-section>
        <div class="text-h4 q-mb-md">Win up to UGX 50,000!</div>
        <div class="text-subtitle1">Smaller prizes also available!</div>
      </q-card-section>
    </q-card>
    <!-- Draw Countdown Card -->
    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-h6">Win Big Wednesday</div>
        <div class="text-h5 text-primary q-mt-md">
          Next draw in: 3d 4h 2m
        </div>
        <div class="text-subtitle2 text-grey-7">
          Draw occurs every Wednesday at 12:00 PM
        </div>
      </q-card-section>
    </q-card>
    <!-- Rules Info Card -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6">How It Works</div>
        <q-list dense>
          <q-item>
            <q-item-section avatar>
              <q-icon name="check_circle" color="positive" />
            </q-item-section>
            <q-item-section>
              Earn tickets for every sale!
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-icon name="check_circle" color="positive" />
            </q-item-section>
            <q-item-section>
              More sales = More chances to win
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-icon name="check_circle" color="positive" />
            </q-item-section>
            <q-item-section>
              Winners announced every Wednesday
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>


    <!-- Tasks Card -->
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

    <!-- Recent Winners -->
    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-h6">Recent Winners</div>
      </q-card-section>
      <q-list padding>
        <q-item v-for="winner in recentWinners" :key="winner.name">
          <q-item-section>
            <q-item-label>{{ winner.name }}</q-item-label>
            <q-item-label caption>
              {{ winner.amount }} ({{ winner.date }})
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="emoji_events" color="amber" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>

    <!-- Commissions Card -->
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

    <!-- Payments Card -->
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
  </q-page>

</template>

<script setup>
import { ref } from 'vue'

// Weekly Draw data
const recentWinners = ref([
  { name: 'Alice W.', amount: 'UGX 50,000', date: 'Apr 10' },
  { name: 'Bob K.', amount: 'UGX 10,000', date: 'Apr 10' },
  { name: 'Carol M.', amount: 'UGX 25,000', date: 'Apr 3' },
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

// Earnings data
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

// Payments data
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


</script>

<style>
.q-expansion-item .q-item {
  padding-right: 0;
  padding-left: 0;
}

.q-card {
  border-radius: 8px;
}
</style> 