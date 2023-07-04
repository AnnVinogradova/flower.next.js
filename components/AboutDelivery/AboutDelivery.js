import {Breadcrumb,BreadcrumbItem,BreadcrumbLink, Heading, Text, UnorderedList, ListItem, OrderedList,Image } from '@chakra-ui/react'
export default function AboutDelivery() {
    return <>
     <div>
      <Breadcrumb>
       <BreadcrumbItem>
        <BreadcrumbLink href="main">Главная</BreadcrumbLink>
       </BreadcrumbItem>
       <BreadcrumbItem>
        <BreadcrumbLink href="delivery">Доставка</BreadcrumbLink>
       </BreadcrumbItem>
      </Breadcrumb>
     </div>
     <div>
      <Heading as="h3" size="md">Доставка</Heading>
      <Text>Приём и обработка заказов по телефону осуществляется с 8:00 утра до 22:00 вечера, через корзину на сайте — круглосуточно.
      После оформления заявки с вами свяжется менеджер нашего магазина для уточнения времени доставки и способе оплаты. Стоимость доставки C 22:00 до 08:00 уточняйте у менеджера заранее!</Text>
     </div>
     <div>
      <UnorderedList>
       <Text>Доставка букетов по городу Москва выполняется в удобное для вас время с 08.00 до 22.00</Text>
       <Text>Доставка цветов в пределах МКАД (по согласованному временному интервалу):</Text>
       <ListItem>при сумме заказа от 3 500 рублей - БЕСПЛАТНО</ListItem>
       <ListItem>при сумме заказа от 2 000 до 3 500 рублей - 500 рублей</ListItem>
      </UnorderedList>
      <Heading as="h3" size="md">ВАЖНАЯ ИНФОРМАЦИЯ ПО ДОСТАВКЕ В ПРАЗДНИЧНЫЕ ПЕРИОДЫ</Heading>
      <OrderedList>
       <ListItem>В связи с загруженным автомобильным трафиком в предпраздничные и праздничные дни, а также  в связи с большим объемом заказов на пиковые интервалы, возможны задержки в доставках и смещение интервалов доставки до 4 часов.</ListItem>
       <ListItem>На праздничные периоды отменяется возможность доставки цветов получателю в качестве сюрприза, а также без точного указания адреса и интервала доставки.</ListItem>
       <ListItem>Заказы к доставке курьерами в пиковую нагрузку на праздничные дни принимаются со 100% предоплатой.  Возможность оплаты заказа наличными и терминалом курьеру закрыты.</ListItem>
       <ListItem>Водитель ждёт на адресе 10 минут, потом выдвигается на следующий адрес и не возвращается. Сроки согласования повторной доставки в этом случае обсуждаются отдельно с менеджером. Просим обеспечить присутствие Получателя на адресе в обозначенный интервал с учётом уточняющего звонка водителя по времени прибытия.</ListItem>
       <ListItem>Сервис экспресс-доставки курьерами за 90 минут определенного ассортимента в пиковую нагрузку на праздничные дни НЕ работает.</ListItem>
       <ListItem>Срочная доставка и доставка к определенному времени  курьерами в пиковую нагрузку на праздничные дни НЕ работает.</ListItem>
       <ListItem>Доставка курьерами в область свыше 10 км от МКАД в пиковую нагрузку на праздничные дни НЕ работает.</ListItem>
       <ListItem>Если происходит отмена заказа клиентом в момент, когда заказ уже собран и выехал на адрес доставки, то возврат денежных средств производится клиенту за вычетом стоимости доставки, но не менее 1000 рублей.</ListItem>
      </OrderedList>
      <div>
       <Image src="/img/Delivery/florist-work1.jpg" />
      </div>
     </div>
     </>;
   }