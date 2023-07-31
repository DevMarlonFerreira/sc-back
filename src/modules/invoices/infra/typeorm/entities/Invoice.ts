import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { IInvoice } from '@modules/invoices/domain/models/IInvoice';

  @Entity('invoices')
  class Invoice implements IInvoice{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    client: string;

    @Column()   
    referencemonth: string;
  
    @Column()
    referenceyear: string;

    @Column()
    date: Date;

    @Column()
    energyQuantity: string;

    @Column()
    energyPriceUnit: string;

    @Column()
    energyValue: string;

    @Column()
    injectedQuantity: string;

    @Column()
    injectedPriceUnit: string;

    @Column()
    injectedValue: string;

    @Column()
    sICMSQuantity: string;

    @Column()
    sICMSPriceUnit: string;

    @Column()
    sICMSValue: string;

    @Column()
    publicContributionValue: string;

    @Column()
    total: string;
  
    // @Column('decimal')
    // price: number;
  
    // @Column('int')
    // quantity: number;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Invoice;















//   CREATE TABLE invoices(
//     id string,
//     client string,
//     reference string,
//     date string,
//     energyQuantity string,
//     energyPriceUnit string,
//     energyValue string,
//     injectedQuantity string,
//     injectedValue string,
//     sICMSQuantity string,
//     sICMSPriceUnit string,
//     sICMSValue string,
//     publicContributionValue string,
//     total string,
//     created_at string,
//     updated_at string,
//     PRIMARY KEY(id)
//  );











// CREATE TABLE invoices(
//   id varchar(50) primary key,
//   client varchar(50),
//   reference varchar(50),
//   date varchar(50),
//   energyQuantity varchar(50),
//   energyPriceUnit varchar(50),
//   energyValue varchar(50),
//   injectedQuantity varchar(50),
//   injectedValue varchar(50),
//   sICMSQuantity varchar(50),
//   sICMSPriceUnit varchar(50),
//   sICMSValue varchar(50),
//   publicContributionValue varchar(50),
//   total varchar(50),
//   created_at date,
//   updated_at date,
// )