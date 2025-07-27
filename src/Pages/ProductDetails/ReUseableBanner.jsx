
const ReUseableBanner = ({title,subTitle=''}) => {
  return (
    <div className="text-center py-10 bg-purple-800 rounded-md pb-52">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="my-4 text-white">{subTitle}</p>
    </div>
  )
}

export default ReUseableBanner