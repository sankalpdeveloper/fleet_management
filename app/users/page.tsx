'use client'

import { Button } from '@/components/ui/button'
import { useContext } from 'react'
import { ThemeContext } from '../components/Provider'
import TitlePage from '../components/TitlePage'
import DataTableAppointment from './table'

function DashboardPage() {
    const theme = useContext(ThemeContext);

    return (
        <>
            <TitlePage title="Users" description="Mange your fleet users here" />
            <DataTableAppointment/>
        </>
    )
}

export default DashboardPage
