export default function ProductInformation({
    description
}){
    return(
        <div className="bg-gray-200 shadow-sm rounded-2xl pb-6 leading-relaxed text-gray-700 w-[90%] mx-auto mb-5">
            <h2 className="text-lg font-semibold text-gray-900 mb-3 pt-4 pl-4">
                Mô tả sản phẩm
            </h2>
            <p className="text-justify p-5">
                {description}
            </p>
      </div>
    )
}