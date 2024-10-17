/**
 * v0 by Vercel.
 * @see https://v0.dev/t/elUBbKUa1XO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [panFile, setPanFile] = useState<File | null>(null)
  const [bankChequeFile, setBankChequeFile] = useState<File | null>(null)
  const [stampFile, setStampFile] = useState<File | null>(null)
  const [aadhaarFile, setAadhaarFile] = useState<File | null>(null)
  const handlePanFileChange = (e: any) => {
    setPanFile(e.target.files[0])
  }
  const handleBankChequeFileChange = (e: any) => {
    setBankChequeFile(e.target.files[0])
  }
  const handleStampFileChange = (e: any) => {
    setStampFile(e.target.files[0])
  }
  const handleAadhaarFileChange = (e: any) => {
    setAadhaarFile(e.target.files[0])
  }
  const handleDeletePanFile = () => {
    setPanFile(null)
  }
  const handleDeleteBankChequeFile = () => {
    setBankChequeFile(null)
  }
  const handleDeleteStampFile = () => {
    setStampFile(null)
  }
  const handleDeleteAadhaarFile = () => {
    setAadhaarFile(null)
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Upload Required Documents</CardTitle>
        <CardDescription>File size should not exceed 10MB</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-6">
        <div className="grid gap-4">
          <div className="grid gap-0.5">
            <Label htmlFor="pan">PAN Card</Label>
            <Input id="pan" type="file" onChange={handlePanFileChange} />
            {panFile && (
              <div className="flex flex-col items-center">
                <img
                  src="/placeholder.svg"
                  alt="PAN Card Preview"
                  width={200}
                  height={200}
                  className="rounded-md object-contain"
                  style={{ aspectRatio: "200/200", objectFit: "cover" }}
                />
                <p className="text-sm text-muted-foreground">{panFile.name}</p>
                <Button variant="destructive" onClick={handleDeletePanFile}>
                  Delete
                </Button>
              </div>
            )}
          </div>
          <div className="grid gap-0.5">
            <Label htmlFor="bank-cheque">Bank Cheque</Label>
            <Input id="bank-cheque" type="file" onChange={handleBankChequeFileChange} />
            {bankChequeFile && (
              <div className="flex flex-col items-center">
                <img
                  src="/placeholder.svg"
                  alt="Bank Cheque Preview"
                  width={200}
                  height={200}
                  className="rounded-md object-contain"
                  style={{ aspectRatio: "200/200", objectFit: "cover" }}
                />
                <p className="text-sm text-muted-foreground">{bankChequeFile.name}</p>
                <Button variant="destructive" onClick={handleDeleteBankChequeFile}>
                  Delete
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-0.5">
            <Label htmlFor="stamp">Stamp</Label>
            <Input id="stamp" type="file" onChange={handleStampFileChange} />
            {stampFile && (
              <div className="flex flex-col items-center">
                <img
                  src="/placeholder.svg"
                  alt="Stamp Preview"
                  width={200}
                  height={200}
                  className="rounded-md object-contain"
                  style={{ aspectRatio: "200/200", objectFit: "cover" }}
                />
                <p className="text-sm text-muted-foreground">{stampFile.name}</p>
                <Button variant="destructive" onClick={handleDeleteStampFile}>
                  Delete
                </Button>
              </div>
            )}
          </div>
          <div className="grid gap-0.5">
            <Label htmlFor="aadhaar">Aadhaar Card</Label>
            <Input id="aadhaar" type="file" onChange={handleAadhaarFileChange} />
            {aadhaarFile && (
              <div className="flex flex-col items-center">
                <img
                  src="/placeholder.svg"
                  alt="Aadhaar Card Preview"
                  width={200}
                  height={200}
                  className="rounded-md object-contain"
                  style={{ aspectRatio: "200/200", objectFit: "cover" }}
                />
                <p className="text-sm text-muted-foreground">{aadhaarFile.name}</p>
                <Button variant="destructive" onClick={handleDeleteAadhaarFile}>
                  Delete
                </Button>
              </div>
            )}
          </div>
        </div>
        <Button className="col-span-2 justify-self-end">Submit</Button>
      </CardContent>
    </Card>
  )
}