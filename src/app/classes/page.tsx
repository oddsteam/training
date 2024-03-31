export default function Classes() {
  
  const data = [
    {
      id: 1,
      name: 'DDD',
      description: 'Domain Driver Design',
      schedule: '2024-04-20',
      dulation: 3,
      instructions: [
        {
          name: 'Roofimon',
        }
      ],
      teachingAssistant: [
        {
          name: 'Toptoppy'
        }
      ]
    },
    {
      id: 2,
      name: 'TDD',
      description: 'Test Driver Design',
      schedule: '2024-04-20',
      dulation: 3,
      instructions: [
        {
          name: 'Roofimon',
        }
      ],
      teachingAssistant: [
        {
          name: 'Toptoppy'
        }
      ]
    }
  ]

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1>Hello, Classes List Page!</h1>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    Schedule
                </th>
                <th scope="col" class="px-6 py-3">
                    Duration
                </th>
                <th scope="col" class="px-6 py-3">
                    Instructions
                </th>
                <th scope="col" class="px-6 py-3">
                    Teaching Assistant
                </th>
            </tr>
        </thead>
        <tbody>
      { 
        data.map((datas) => ( 
        // <div key={datas.id}>{datas.id} sdsa</div> 
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={datas.id}>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  { datas.name }
                </th>
                <td class="px-6 py-4">
                  { datas.description }
                </td>
                <td class="px-6 py-4">
                  { datas.schedule }
                </td>
                <td class="px-6 py-4 text-right">
                  { datas.dulation }
                </td>
                <td class="px-6 py-4">
                  { datas.instructions?.map(instruction => (instruction?.name) ) }
                </td>
                <td class="px-6 py-4">
                  { datas.teachingAssistant?.map(teachingAssistant => (teachingAssistant?.name) )  }
                </td>
                {/* <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td> */}
            </tr>
        ))
      }
      </tbody>
      </table>
    </div>
  )
}
