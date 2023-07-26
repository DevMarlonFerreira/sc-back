import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('invoices')
  class Invoice {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    client: string;

    @Column()
    reference: string;

    @Column()
    date: string;

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