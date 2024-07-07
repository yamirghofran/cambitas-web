## User
- id: string
- uid: string
- companyID: string
- name: string
- profileImageUrl: string
- mobileNo: string
- email: string
- role: string
- created_at: datetime
- updated_at: datetime

## Project
- id: string
- companyID: string
- managerId: string (User.id)
- name: string
- createdBy: string (User.id)
- startDate: datetime
- endDate: datetime
- location: {
    latitude: number,
    longitude: number
}
- address: string
- description: string
- created_at: datetime
- updated_at: datetime

## InventoryItem
- id: string
- projectId: string (Project.id)
- name: string
- nameTrimmed: string
- additionalInfo: string
- itemType: ItemType
- categoryId: string (Category.id)
- currentHolderId: string (User.id)
- currentProjectId: string (Project.id)
- dateAdded: datetime
- isExpired: boolean
- isAvailable: boolean
- updatedBy: string (User.id)
- imageUrls: string[]
- uiImages: string[]
- created_at: datetime
- updated_at: datetime

## Request 
- id: string
- projectId: string (Project.id)
- requesterId: string (User.id)
- recipientId: string (User.id)
- itemId: string (Item.id)
- status: string
- created_at: datetime
- updated_at: datetime

