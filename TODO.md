### Component Reference

- https://pagedone.io/blocks#product-E-commerce

---

## Plant API Documentation Swagger( Orignial )

**Version:** 1.0.0  
**Specification:** OpenAPI 3.0  
**Description:** API documentation for operations related to managing plants, equipment, soils, and users.

---

## Servers

- **URL:** `http://localhost:8000`
- **Description:** Local server

---

## Endpoints

### 1. **Plants**

#### `GET /plants`

- **Description:** Retrieve a list of all plants available in the system.
- **Parameters:** None
- **Responses:**
  - **200 OK**
    - **Content-Type:** `application/json`
    - **Schema:**
    ```json
    [
      {
        "id": 1,
        "name": "Fern"
      }
    ]
    ```

#### `POST /addPlant`

- **Description:** Add a new plant to the database.
- **Parameters:** None
- **Responses:**
  - **200 OK**
    - **Content-Type:** `application/json`
    - **Schema:** `{}`

#### `DELETE /deletePlant/{id}`

- **Description:** Delete a plant by its ID.
- **Parameters:**
  - `id` (Path Parameter): The ID of the plant to be deleted.
- **Responses:**
  - **200 OK**
    - **Content-Type:** `application/json`
    - **Schema:**
    ```json
    [
      {
        "id": 1,
        "name": "Fern"
      }
    ]
    ```

---

### 2. **Equipments**

#### `GET /equipments`

- **Description:** Retrieve a list of all equipment related to plants.
- **Parameters:** None
- **Responses:**
  - **200 OK**
    - **Content-Type:** `application/json`
    - **Schema:**
    ```json
    [
      {
        "id": 1,
        "name": "Watering Can"
      }
    ]
    ```

#### `POST /addEquipment`

- **Description:** Add a new equipment item related to plant care.
- **Parameters:** None
- **Responses:**
  - **200 OK**
    - **Content-Type:** `application/json`
    - **Schema:**
    ```json
    {
      "id": 2,
      "name": "Soil Tester"
    }
    ```

#### `DELETE /deleteEquipment/{id}`

- **Description:** Delete equipment by its ID.
- **Parameters:**
  - `id` (Path Parameter): The ID of the equipment to be deleted.
- **Responses:**
  - **200 OK**
    - **Content-Type:** `application/json`
    - **Schema:**
    ```json
    {
      "message": "Equipment deleted successfully"
    }
    ```

---

### 3. **Users**

#### `GET /auth`

- **Description:** Retrieve authentication information (e.g., user details).
- **Parameters:** None
- **Responses:**
  - **200 OK**
    - **Content-Type:** `application/json`
    - **Schema:**
    ```json
    {
      "id": 1,
      "username": "johndoe"
    }
    ```

#### `POST /addUser`

- **Description:** Add a new user to the system.
- **Parameters:** None
- **Responses:**
  - **200 OK**
    - **Content-Type:** `application/json`
    - **Schema:** `{}`

#### `DELETE /deleteUser/{userId}`

- **Description:** Delete a user by their ID.
- **Parameters:**
  - `userId` (Path Parameter): The ID of the user to be deleted.
- **Responses:**
  - **200 OK**
    - **Content-Type:** `application/json`
    - **Schema:**
    ```json
    {
      "message": "User deleted successfully"
    }
    ```

---

### 4. **Soils**

#### `GET /soils`

- **Description:** Retrieve a list of all soils available in the system.
- **Parameters:** None
- **Responses:**
  - **200 OK**
    - **Content-Type:** `application/json`
    - **Schema:**
    ```json
    [
      {
        "id": 1,
        "name": "Loamy Soil"
      }
    ]
    ```

#### `POST /addSoil`

- **Description:** Add a new soil type to the system.
- **Parameters:** None
- **Responses:**
  - **200 OK**
    - **Content-Type:** `application/json`
    - **Schema:**
    ```json
    {
      "id": 3,
      "name": "Clay Soil"
    }
    ```

#### `DELETE /deleteSoil/{id}`

- **Description:** Delete a soil type by its ID.
- **Parameters:**
  - `id` (Path Parameter): The ID of the soil type to be deleted.
- **Responses:**
  - **200 OK**
    - **Content-Type:** `application/json`
    - **Schema:**
    ```json
    {
      "message": "Soil deleted successfully"
    }
    ```

---

## General Observations:

- **Clearer API Endpoints:** Removed redundant descriptions and streamlined endpoint purposes.
- **Consistent Response Formats:** Example responses are now consistent for clarity.
- **Path Parameters:** Defined path parameters like `id` and `userId` where necessary.
- **Descriptive Responses:** More accurate and meaningful response messages, especially for `DELETE` operations.

## Suggestions for Improvement:

- **Authorization:** Consider adding authentication details (e.g., API keys, OAuth) for secure endpoints like `/auth`.
- **Validations:** For `POST /addPlant` and similar endpoints, consider specifying request body validation (schema).
