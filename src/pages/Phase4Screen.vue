<template>
  <q-page padding class="max-width-page">
    <!-- Concept Explanation -->
    <q-card class="q-mb-lg bg-primary text-white">
      <q-card-section>
        <div class="text-h6">Great Sales Program</div>
        <div class="text-subtitle1 q-mt-md">
          Achieve 'Great Sale' status for higher commissions and more spins!
        </div>
        <div class="row q-mt-lg">
          <div class="col-6">
            <q-icon name="trending_up" size="2em" />
            <div class="text-h6">+5%</div>
            <div class="text-caption">Extra Commission</div>
          </div>
          <div class="col-6">
            <q-icon name="casino" size="2em" />
            <div class="text-h6">+2</div>
            <div class="text-caption">Bonus Spins</div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Monthly Summary -->
    <q-card class="q-mb-lg text-center">
      <q-card-section>
        <div class="text-h5 text-positive">3 Great Sales</div>
        <div class="text-subtitle2">achieved this month</div>
        <q-linear-progress
          :value="0.6"
          color="positive"
          class="q-mt-sm"
          size="10px"
        />
        <div class="text-caption q-mt-xs">60% towards monthly target</div>
      </q-card-section>
    </q-card>

    <!-- Recent Sales List -->
    <div class="text-h6 q-mb-md">Recent Sales</div>
    
    <q-list separator>
      <!-- Sale Item 1 -->
      <q-card class="q-mb-md">
        <q-card-section>
          <div class="row items-center justify-between q-mb-md">
            <div class="text-h6">Sale #123 - John Smith</div>
            <q-chip
              color="positive"
              text-color="white"
              icon="verified"
            >
              Great Sale Achieved!
            </q-chip>
          </div>

          <!-- Progress -->
          <q-linear-progress
            :value="1"
            color="positive"
            class="q-mb-sm"
          />
          <div class="text-caption text-positive q-mb-md">
            Status: All criteria met
          </div>

          <!-- Criteria Checklist -->
          <q-list dense padding>
            <q-item>
              <q-item-section avatar>
                <q-checkbox checked dense color="positive" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Customer Contactable</q-item-label>
                <q-item-label caption>Verified: Apr 10</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="check_circle" color="positive" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-checkbox checked dense color="positive" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Education Passed</q-item-label>
                <q-item-label caption>Verified: Apr 11</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="check_circle" color="positive" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-checkbox checked dense color="positive" />
              </q-item-section>
              <q-item-section>
                <q-item-label>First Payment Made</q-item-label>
                <q-item-label caption>Verified: Apr 12</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="check_circle" color="positive" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-checkbox checked dense color="positive" />
              </q-item-section>
              <q-item-section>
                <q-item-label>No Support Tickets</q-item-label>
                <q-item-label caption>Verified: Apr 12</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="check_circle" color="positive" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>

      <!-- Sale Item 2 -->
      <q-card class="q-mb-md">
        <q-card-section>
          <div class="row items-center justify-between q-mb-md">
            <div class="text-h6">Sale #122 - Sarah Johnson</div>
            <q-chip
              color="warning"
              text-color="white"
              icon="pending"
            >
              In Progress
            </q-chip>
          </div>

          <!-- Progress -->
          <q-linear-progress
            :value="0.75"
            color="warning"
            class="q-mb-sm"
          />
          <div class="text-caption text-warning q-mb-md">
            Status: 3/4 criteria met - On track
          </div>

          <!-- Warning Banner -->
          <q-banner dense class="bg-warning text-white q-mb-md">
            <template v-slot:avatar>
              <q-icon name="warning" />
            </template>
            Support Ticket Opened - Action Needed
          </q-banner>

          <!-- Criteria Checklist -->
          <q-list dense padding>
            <q-item>
              <q-item-section avatar>
                <q-checkbox checked dense color="positive" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Customer Contactable</q-item-label>
                <q-item-label caption>Verified: Apr 13</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="check_circle" color="positive" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-checkbox checked dense color="positive" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Education Passed</q-item-label>
                <q-item-label caption>Verified: Apr 13</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="check_circle" color="positive" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-checkbox checked dense color="positive" />
              </q-item-section>
              <q-item-section>
                <q-item-label>First Payment Made</q-item-label>
                <q-item-label caption>Verified: Apr 14</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="check_circle" color="positive" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-checkbox dense color="grey" />
              </q-item-section>
              <q-item-section>
                <q-item-label>No Support Tickets</q-item-label>
                <q-item-label caption class="text-negative">Action needed</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="error" color="negative" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>

      <!-- Sale Item 3 -->
      <q-card class="q-mb-md">
        <q-card-section>
          <div class="row items-center justify-between q-mb-md">
            <div class="text-h6">Sale #121 - Michael Brown</div>
            <q-chip
              color="grey"
              text-color="white"
              icon="schedule"
            >
              Needs Attention
            </q-chip>
          </div>

          <!-- Progress -->
          <q-linear-progress
            :value="0.25"
            color="grey"
            class="q-mb-sm"
          />
          <div class="text-caption text-grey q-mb-md">
            Status: 1/4 criteria met - Action needed
          </div>

          <!-- Criteria Checklist -->
          <q-list dense padding>
            <q-item>
              <q-item-section avatar>
                <q-checkbox checked dense color="positive" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Customer Contactable</q-item-label>
                <q-item-label caption>Verified: Apr 14</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="check_circle" color="positive" />
              </q-item-section>
            </q-item>
            <q-item v-for="item in pendingItems" :key="item.label">
              <q-item-section avatar>
                <q-checkbox dense color="grey" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ item.label }}</q-item-label>
                <q-item-label caption>Pending verification</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="pending" color="grey" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-list>

    <!-- Tasks Section -->
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

const pendingItems = [
  { label: 'Education Passed' },
  { label: 'First Payment Made' },
  { label: 'No Support Tickets' }
]

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
.q-card {
  border-radius: 8px;
}

.text-warning {
  color: #F2C037;
}
</style> 