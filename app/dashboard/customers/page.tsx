import { Metadata } from "next"
import { lusitana } from "@/app/ui/fonts"
import CustomersTable from "@/app/ui/customers/table"
import { fetchFilteredCustomers } from "@/app/lib/data"
import { Suspense } from "react"
import { CustomersTableSkeleton, InvoicesTableSkeleton } from "@/app/ui/skeletons"


export const metadata: Metadata ={
    title: "Customers"
}


export default async function CustomersPage(props: {
    searchParams?: Promise<{
        query?: string;
    }>
}){


    const searchParams = await props.searchParams;
    const query = searchParams?.query || "";

    const customers = await fetchFilteredCustomers(query)

    return(
        <div>
            <div>
                <h1 className={`${lusitana.className} text-white text-2xl mb-6`}>Customers</h1>
            </div>
            <Suspense  fallback={<CustomersTableSkeleton/>}>
                <CustomersTable customers={customers}/>
            </Suspense>
        </div>
    )
}