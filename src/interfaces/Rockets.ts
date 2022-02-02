export interface IRockets {
    id: string
    active: boolean
    boosters: number
    company: string
    cost_per_launch: number
    country: string
    description: string
    diameter: {
        feet: number
        meters: number
    }

}

