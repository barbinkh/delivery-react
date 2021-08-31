export interface IFoodProviderModel{
    id: number,
    created: number,
    modified: number,
    title:string,
    description:string,
    delivery_price: number,
    max_delivery_time: string,
    status: string,
    order: number, 
    image: string, 
    open_time: string,
}