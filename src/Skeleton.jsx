
export const Skeleton = () => {
  return (
    // <div className="w-full max-w-sm container mt-20 mx-auto">
    <div className="w-full  mt-20 mx-auto">
    <div className="border border-gray-200 p-4 col-span-3">
      <div className="animate-pulse space-y-8">
        <div className="flex gap-5">
          <div className="bg-gray-200 h-12 w-12 rounded-full" />
          <div className="space-y-2 flex-1 pt-4">
            <div className="h-6 bg-gray-200 w-1/2 rounded-sm" />
            <div className="h-6 bg-gray-200 w-1/3 rounded-sm" />
          </div>
        </div>
        <div className="flex-1 space-y-2">
          <div className="h-6 bg-gray-200 full"></div>
          <div className="h-6 bg-gray-200 w-3/3"></div>
        </div>
      </div>
    </div>
  </div>
  )
}
