# Asset Location Classes

Every asset in INHERIT has a `category` that determines its location class — whether the asset exists physically at a property, in a financial institution, in digital infrastructure, or as an intangible right.

## Location Class Reference

### Physical Assets

Physical assets exist as tangible objects at a real-world location. Set `propertyId` to the property where the item is stored or kept.

| Category | Description |
|----------|-------------|
| `vehicle` | Cars, motorcycles, boats, caravans |
| `jewellery` | Rings, necklaces, watches, brooches |
| `art` | Paintings, sculptures, prints |
| `antiques` | Furniture, ceramics, silverware of historical value |
| `collectibles` | Stamps, coins, trading cards, memorabilia |
| `furniture` | Household furniture not classified as antique |
| `electronics` | Computers, televisions, audio equipment |
| `musical_instruments` | Pianos, guitars, violins |
| `books` | Physical book collections |
| `clothing` | Clothing, shoes, accessories of significant value |
| `kitchenware` | Cookware, tableware, appliances of significant value |
| `sports_equipment` | Golf clubs, bicycles, fishing gear |
| `firearms` | Licensed firearms and ammunition |
| `wine_and_spirits` | Wine cellars, whisky collections |
| `tools` | Workshop tools, power tools |
| `garden_and_outdoor` | Garden machinery, outdoor furniture, sheds |

### Financial Assets

Financial assets are held by institutions. `propertyId` should be `null` — these assets do not have a physical location at a property.

| Category | Description |
|----------|-------------|
| `bank_account` | Current/checking accounts |
| `savings_account` | Savings and deposit accounts |
| `investment` | ISAs, managed funds, investment portfolios |
| `pension` | Workplace and private pensions |
| `shares` | Individual shareholdings |
| `premium_bonds` | NS&I Premium Bonds (UK) |
| `insurance` | Life insurance, endowment policies |
| `business_interest` | Ownership stakes in businesses, partnerships |
| `sukuk` | Islamic bonds (Shariah-compliant fixed-income) |
| `takaful` | Islamic cooperative insurance |
| `islamic_deposit` | Shariah-compliant deposit accounts |

### Digital Assets

Digital assets exist in online infrastructure. `propertyId` should be `null`.

| Category | Description |
|----------|-------------|
| `cryptocurrency` | Bitcoin, Ethereum, and other crypto holdings |
| `domain_name` | Internet domain registrations |
| `social_media_account` | Accounts with followers, content, or commercial value |
| `digital_subscription` | Ongoing digital services with transferable value |

### Intangible Assets

Intangible assets are legal rights without physical or digital form. `propertyId` should be `null`.

| Category | Description |
|----------|-------------|
| `intellectual_property` | Patents, trademarks, copyrights, royalty streams |

### Other

The `other` category is a catch-all for assets that do not fit the above classifications. Set `propertyId` based on whether the asset has a physical location.

## The `propertyId` Rule

Set `propertyId` to a valid `Property.id` for physical assets — it records which property the item is located at. This is useful for executors who need to visit properties to catalogue and collect estate assets.

Leave `propertyId` null (or omit it) for financial, digital, and intangible assets. These assets are not stored at a physical property. Their location is captured in the `location` free-text field or via `identifiers` (account numbers, policy references, etc.).

### Example

```json
{
  "id": "d4e5f6a7-b8c9-0123-def4-56789abcdef0",
  "name": "Steinway Model B grand piano",
  "category": "musical_instruments",
  "propertyId": "p0000000-0000-0000-0000-000000000001",
  "estimatedValue": { "amount": 8500000, "currency": "GBP" },
  "condition": "excellent",
  "location": "Drawing room, ground floor"
}
```

```json
{
  "id": "e5f6a7b8-c9d0-1234-ef56-789abcdef012",
  "name": "Barclays current account",
  "category": "bank_account",
  "estimatedValue": { "amount": 1245032, "currency": "GBP" },
  "identifiers": [
    { "type": "sort_code", "value": "20-45-67" },
    { "type": "account_number", "value": "12345678" }
  ]
}
```

## Summary Table

| Location Class | Categories | `propertyId` | Count |
|----------------|-----------|--------------|-------|
| Physical | vehicle, jewellery, art, antiques, collectibles, furniture, electronics, musical_instruments, books, clothing, kitchenware, sports_equipment, firearms, wine_and_spirits, tools, garden_and_outdoor | Set to property | 16 |
| Financial | bank_account, savings_account, investment, pension, shares, premium_bonds, insurance, business_interest, sukuk, takaful, islamic_deposit | Null | 11 |
| Digital | cryptocurrency, domain_name, social_media_account, digital_subscription | Null | 4 |
| Intangible | intellectual_property | Null | 1 |
| Other | other | Depends on asset | 1 |
