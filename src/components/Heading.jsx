const Heading = ({title,subTitle=''}) => {
  return (
    <div className="">
        <h1 className="text-4xl text-black font-bold">{title}</h1>
        <h1 className="font-mono pt-3 text-gray-700">{subTitle}</h1>
    </div>
  )
}

export default Heading