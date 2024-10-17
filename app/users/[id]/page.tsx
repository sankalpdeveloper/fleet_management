'use client'

import { Button } from '@/components/ui/button'
import { useContext } from 'react'
import { ThemeContext } from '../../components/Provider'
import TitlePage from '../../components/TitlePage'
import DataTableAppointment from './table'
import UploadComponent from './upload'

function DashboardPage() {
    const theme = useContext(ThemeContext);

    return (
        <>
            <TitlePage title="Users Details" description="Mange your fleet user here" />
            <div className='mt-4 flex space-x-8' >
                <div className='w-1/2 space-y-4'>
                    <p>Name: Sankalp Demo</p>
                    <p>Mobile: 9549736263</p>
                </div>
                <div className='w-1/2'>
                    <p className=''>User Vehicals</p>
                    <DataTableAppointment />
                </div>
            </div>
               <div>
               <UploadComponent/>
               </div>
        </>
    )
}

export default DashboardPage
