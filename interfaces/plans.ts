import db from '../database/backup'

type plan = typeof db.plans

export interface IPlans extends plan {}
