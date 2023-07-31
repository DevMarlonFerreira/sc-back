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
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Invoice;
