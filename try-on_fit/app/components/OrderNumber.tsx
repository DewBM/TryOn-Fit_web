interface Props {
  orderId: number;
  orderDate: string;
  estimateDate: string;
}

function OrderNumber({ orderId, orderDate, estimateDate }: Props) {
  return (
    <div className="h-[150px] w-[90%] pt-5">
      <div className="flex flex-col py-2 px-10">
        <p className='text-2xl font-bold'>Order ID : Pre4567bfdvh{orderId}</p>
        <div className="flex flex-row py-5">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
          <p className='text-sm font-light pr-5'>
            Order Date :<span className='text-lg font-semibold'>{orderDate}</span>
          </p>
          <div className='border-l-2 border-gray-300 h-6 mx-4'></div>
          <p className='pl-5 text-sm font-light text-main-dark'>
            <span className="material-symbols-outlined pr-3 ">local_shipping</span>Estimate Delivery :
            <span className='text-lg font-semibold'>{estimateDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderNumber;
