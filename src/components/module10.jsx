import React from 'react'
import Delete_rules from './module9/Delete_rules'
import BlockIPButton from './module10/BlockIPButton'
import CronJobManager from './module10/Cron_On_Off'

export default function Module10() {
  return (
    <div>
      <BlockIPButton/>
      <CronJobManager/>
    </div>
  )
}
