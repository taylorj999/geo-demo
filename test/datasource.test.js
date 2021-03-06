import DataSource from '../src/server/datasourcepooled'

describe('Datasource Pool', () => {  
	let dataSource = null;

	beforeAll(() => {    dataSource = new DataSource();  });
	
	test('testing that datasouce creates the pool without errors', async () => {
		let promise = dataSource.open();
		await expect(promise).resolves.toBeUndefined();
	});

	test('testing that connection is valid', async () => {
		let promise = dataSource.test();
		await expect(promise).resolves.toEqual(2);
	});
	
	afterAll(() => {	dataSource.close(); });
	
	});
	