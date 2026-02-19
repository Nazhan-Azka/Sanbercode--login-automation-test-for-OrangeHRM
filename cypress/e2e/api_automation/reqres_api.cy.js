describe('Reqres API Automation', () => {

  const apiKey = 'reqres_80d8596c4d9e4284a8b9b855511bccc8'
  const baseUrl = 'https://reqres.in/api'

  // 1️⃣ GET List Users
  it('TC01 - GET list users page 2', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/users?page=2`,
      headers: { 'x-api-key': apiKey }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.page).to.eq(2)
    })
  })

  // 2️⃣ GET Single User
  it('TC02 - GET single user', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/users/2`,
      headers: { 'x-api-key': apiKey }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.data.id).to.eq(2)
    })
  })

  // 3️⃣ GET User Not Found
  it('TC03 - GET user not found', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/users/23`,
      headers: { 'x-api-key': apiKey },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(404)
    })
  })

  // 4️⃣ POST Create User
  it('TC04 - POST create user', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/users`,
      headers: { 'x-api-key': apiKey },
      body: {
        name: "Nazhan",
        job: "QA"
      }
    }).then((res) => {
      expect(res.status).to.eq(201)
      expect(res.body).to.have.property('id')
    })
  })

  // 5️⃣ PUT Update User
  it('TC05 - PUT update user', () => {
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/users/2`,
      headers: { 'x-api-key': apiKey },
      body: {
        name: "Nazhan Update",
        job: "Automation QA"
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.name).to.eq("Nazhan Update")
    })
  })

  // 6️⃣ PATCH Update User
  it('TC06 - PATCH update user', () => {
    cy.request({
      method: 'PATCH',
      url: `${baseUrl}/users/2`,
      headers: { 'x-api-key': apiKey },
      body: {
        job: "Senior QA"
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.job).to.eq("Senior QA")
    })
  })

  // 7️⃣ DELETE User
  it('TC07 - DELETE user', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/users/2`,
      headers: { 'x-api-key': apiKey }
    }).then((res) => {
      expect(res.status).to.eq(204)
    })
  })

  // 8️⃣ POST Register Success
  it('TC08 - POST register successful', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/register`,
      headers: { 'x-api-key': apiKey },
      body: {
        email: "eve.holt@reqres.in",
        password: "pistol"
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('token')
    })
  })

  // 9️⃣ POST Login Success
  it('TC09 - POST login successful', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/login`,
      headers: { 'x-api-key': apiKey },
      body: {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('token')
    })
  })

  // 🔟 POST Login Failed
  it('TC10 - POST login failed', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/login`,
      headers: { 'x-api-key': apiKey },
      body: {
        email: "peter@klaven"
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(400)
      expect(res.body).to.have.property('error')
    })
  })

})
