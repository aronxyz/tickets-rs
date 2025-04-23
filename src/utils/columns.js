import { createColumnHelper } from "@tanstack/react-table"

const columnHelper = createColumnHelper()

export const columns = [
    columnHelper.accessor('title', {
        cell: info => info.getValue()
    }),
    columnHelper.accessor('description', {
        cell: info => info.getValue()
    }),
    columnHelper.accessor('type', {
        cell: info => info.getValue()
    }),
    columnHelper.accessor('priority', {
        cell: info => info.getValue()
    }),
    columnHelper.accessor('status', {
        cell: info => info.getValue()
    }),
    columnHelper.accessor('progress', {
        cell: info => info.getValue()
    }),
]