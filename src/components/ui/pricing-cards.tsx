'use client'

import { Check, MoveRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useState, FormEvent, ChangeEvent } from 'react'
import { pricingData, PricingTier } from '@/types/data'
import { Button } from './Button'
import { motion } from 'framer-motion'
import { toast } from 'sonner'

interface OrderFormProps {
  selectedPackage: PricingTier
  onClose: () => void
}

interface FormData {
  name: string
  email: string
  phone: string
  address: string
  notes: string
}

function OrderForm({ selectedPackage, onClose }: OrderFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/order-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          package: selectedPackage.name,
          price: selectedPackage.price,
        }),
      })

      if (response.ok) {
        toast('Order submitted successfully!')
        onClose()
      } else {
        throw new Error('Failed to submit order')
      }
    } catch (error) {
      console.log(error)
      toast('Error submitting order. Please try again.')
    }
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div className='space-y-4'>
        <div>
          <Label htmlFor='name'>Full Name</Label>
          <Input
            id='name'
            required
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            type='email'
            required
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor='phone'>Phone Number</Label>
          <Input
            id='phone'
            required
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor='address'>Address</Label>
          <Input
            id='address'
            required
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor='notes'>Additional Notes</Label>
          <Textarea
            id='notes'
            value={formData.notes}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <Button type='submit' className='w-full'>
        Submit Order
      </Button>
    </form>
  )
}

function Pricing() {
  const [selectedPackage, setSelectedPackage] = useState<PricingTier | null>(
    null
  )
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className='flex items-center justify-center' id="pricing">
      <section className='max-w-7xl py-5 lg:py-10 w-full'>
        <div className='container mx-auto'>
          <div className='flex text-center justify-center items-center gap-4 flex-col'>
            <Badge>Pricing</Badge>
            <div className='flex gap-2 flex-col'>
              <h2 className='text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular'>
                Web Development
                <span className='block bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text'>
                  Packages
                </span>
              </h2>
              <p className='text-lg leading-relaxed tracking-tight text-neutral-500 max-w-xl text-center dark:text-neutral-400'>
                Professional web solutions for South African businesses
              </p>
            </div>
            <div className='grid pt-10 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8'>
              {pricingData.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='group relative cursor-pointer w-full'
                >
                  <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300 ease-in-out'></div>
                  <Card
                    className={`relative w-full rounded-xl transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:scale-[1.02] z-10 hover:border-slate-950 hover:border dark:hover:border-violet-600 dark:hover:border ${
                      tier.popular ? 'shadow-2xl' : ''
                    }`}
                  >
                    <CardHeader>
                      <CardTitle>
                        <span className='flex flex-row gap-4 items-center font-normal'>
                          {tier.name}
                          {tier.popular && (
                            <Badge variant='secondary'>Most Popular</Badge>
                          )}
                        </span>
                      </CardTitle>
                      <CardDescription>{tier.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className='flex flex-col gap-8 justify-start'>
                        <p className='flex flex-row items-center gap-2 text-xl'>
                          <span className='text-4xl'>R{tier.price}</span>
                          <span className='text-sm text-neutral-500 dark:text-neutral-400'>
                            once-off
                          </span>
                        </p>
                        <div className='flex flex-col gap-4 justify-start'>
                          {tier.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className='flex flex-row gap-4'
                            >
                              <Check className='w-4 h-4 mt-2 text-neutral-900 dark:text-neutral-50' />
                              <div className='flex flex-col'>
                                <p>{feature.title}</p>
                                <p className='text-neutral-500 text-sm dark:text-neutral-400'>
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <Dialog
                          open={isDialogOpen}
                          onOpenChange={setIsDialogOpen}
                        >
                          <DialogTrigger asChild>
                            <Button
                              variant={tier.popular ? 'default' : 'outline'}
                              className='gap-4 w-full transition-all duration-300 hover:scale-105 rounded-full'
                              onClick={() => setSelectedPackage(tier)}
                            >
                              {tier.buttonText}{' '}
                              <MoveRight className='w-4 h-4' />
                            </Button>
                          </DialogTrigger>
                          {selectedPackage && (
                            <DialogContent className='sm:max-w-[425px] bg-white dark:bg-gray-900'>
                              <DialogHeader>
                                <DialogTitle>
                                  Order {selectedPackage.name} Package
                                </DialogTitle>
                                <DialogDescription>
                                  Please fill in your details to order the{' '}
                                  {selectedPackage.name} package at R
                                  {selectedPackage.price}
                                </DialogDescription>
                              </DialogHeader>
                              <OrderForm
                                selectedPackage={selectedPackage}
                                onClose={() => setIsDialogOpen(false)}
                              />
                            </DialogContent>
                          )}
                        </Dialog>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export { Pricing }
