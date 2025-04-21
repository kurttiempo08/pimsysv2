angular.module('app').config([
	'$stateProvider',
	'$urlRouterProvider',
	'$ocLazyLoadProvider',
	'$locationProvider',
	function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider) {
		$urlRouterProvider.otherwise('/');
		$ocLazyLoadProvider.config({
			debug: false,
		});
		$stateProvider
			.state('app', {
				abstract: true,
				templateUrl: COMURL + 'full.html?v=' + VERSION,
			})
			.state('app.main', {
				url: '/',
				templateUrl: APPURL + 'dashboard/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [APPURL + 'dashboard/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Dashboard',
				},
			})
			.state('app.menu', {
				url: '/add-menu',
				templateUrl: APPURL + 'dashboard/menu.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [APPURL + 'dashboard/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Developer Settings',
				},
			})
			.state('app.profile', {
				url: '/view-profile',
				templateUrl: COMURL + 'profile/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [COMURL + 'profile/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'View Profile',
				},
			})
			// MASTERFILE
			.state('app.masterfile', {
				abstract: true,
			})
			.state('app.masterfile.center-list', {
				url: '/center-list',
				templateUrl: MASTERURL + 'center_list/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [MASTERURL + 'center_list/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Masterfile > Center List',
					urlGroup: 'Masterfile',
					formName: 'Center List',
				},
			})
			.state('app.masterfile.office-list', {
				url: '/office-list',
				templateUrl: MASTERURL + 'office_code/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [MASTERURL + 'office_code/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Masterfile > Office List',
					urlGroup: 'Masterfile',
					formName: 'Office Code List',
				},
			})
			.state('app.masterfile.fundsource-list', {
				url: '/fundsource-list',
				templateUrl: MASTERURL + 'fundsource_list/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [MASTERURL + 'fundsource_list/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Masterfile > Fund Source List',
					urlGroup: 'Masterfile',
					formName: 'Fund Source List',
				},
			})
			.state('app.masterfile.supplier-list', {
				url: '/supplier-list',
				templateUrl: MASTERURL + 'supplier_list/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [MASTERURL + 'supplier_list/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Masterfile > Supplier List',
					urlGroup: 'Masterfile',
					formName: 'Supplier List',
				},
			})
			.state('app.masterfile.chart-of-account', {
				url: '/chart-of-account',
				templateUrl: MASTERURL + 'coa/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [MASTERURL + 'coa/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Masterfile > Chart of Account',
					urlGroup: 'Masterfile',
					formName: 'Chart of Account',
				},
			})
			.state('app.masterfile.unit-list', {
				url: '/unit-list',
				templateUrl: MASTERURL + 'unit_list/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [MASTERURL + 'unit_list/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Masterfile > Unit List',
					urlGroup: 'Masterfile',
					formName: 'Unit List',
				},
			})
			.state('app.masterfile.member-list', {
				url: '/member-list',
				templateUrl: MASTERURL + 'member_reg/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [MASTERURL + 'member_reg/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Masterfile > Home Owner List',
					urlGroup: 'Masterfile',
					formName: 'Home Owner List',
				},
			})
			.state('app.masterfile.cattle-list', {
				url: '/cattle-list',
				templateUrl: MASTERURL + 'cattle_list/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [MASTERURL + 'cattle_list/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Masterfile > Cattle List',
					urlGroup: 'Masterfile',
					formName: 'Cattle List',
				},
			})
			.state('app.masterfile.recep-list', {
				url: '/recep-list',
				templateUrl: MASTERURL + 'recepients_list/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [MASTERURL + 'recepients_list/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Masterfile > Recepient List',
					urlGroup: 'Masterfile',
					formName: 'Recepient List',
				},
			})
			.state('app.masterfile.personnel-list', {
				url: '/personnel-list',
				templateUrl: MASTERURL + 'personnel_list/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [MASTERURL + 'personnel_list/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Masterfile > Personnel List',
					urlGroup: 'Masterfile',
					formName: 'Personnel List',
				},
			})
			.state('app.masterfile.activity-list', {
				url: '/activity-list',
				templateUrl: MASTERURL + 'activity_list/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [MASTERURL + 'activity_list/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Masterfile > Activity List',
					urlGroup: 'Masterfile',
					formName: 'Activity List',
				},
			})
			.state('app.masterfile.renter-list', {
				url: '/renter-list',
				templateUrl: MASTERURL + 'renter/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [MASTERURL + 'renter/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Masterfile > Renter List',
					urlGroup: 'Masterfile',
					formName: 'Renter List',
				},
			})
			.state('app.masterfile.other-income', {
				url: '/other-income',
				templateUrl: MASTERURL + 'other_income/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [MASTERURL + 'other_income/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Masterfile > Other Income',
					urlGroup: 'Masterfile',
					formName: 'Other Income',
				},
			})
			
			//ADMINISTRATIVE
			.state('app.administrative', {
				abstract: true,
			})
			.state('app.administrative.admin-lock', {
				url: '/admin-lock',
				templateUrl: ADMINURL + 'admin_lock/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [ADMINURL + 'admin_lock/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Administrative > Admin Lock',
					urlGroup: 'Administrative',
					formName: 'Admin Lock',
				},
			})
			.state('app.administrative.activity-logs', {
				url: '/activity-logs',
				templateUrl: ADMINURL + 'activity_logs/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [ADMINURL + 'activity_logs/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Administrative > Activity Logs',
					urlGroup: 'Administrative',
					formName: 'Activity Logs',
				},
			})
			.state('app.administrative.user-list', {
				url: '/user-list',
				templateUrl: ADMINURL + 'user_list/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [ADMINURL + 'user_list/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Administrative > User List',
					urlGroup: 'Administrative',
					formName: 'User List',
				},
			})
			.state('app.administrative.signatory-list', {
				url: '/signatory-list',
				templateUrl: ADMINURL + 'signatory_list/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [ADMINURL + 'signatory_list/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Administrative > Signatory List',
					urlGroup: 'Administrative',
					formName: 'Signatory List',
				},
			})
			.state('app.administrative.or-setup', {
				url: '/or-setup',
				templateUrl: ADMINURL + 'or_setup/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [ADMINURL + 'or_setup/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Administrative > Official Receipt Series Setup',
					urlGroup: 'Administrative',
					formName: 'Official Receipt Series Setup',
				},
			})
			.state('app.administrative.auto-debit-chart-of-account', {
				url: '/auto-debit-chart-of-account',
				templateUrl: ADMINURL + 'tad_coa/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [ADMINURL + 'tad_coa/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Administrative > Auto Debit Chart of Account',
					urlGroup: 'Administrative',
					formName: 'Auto Debit Chart of Account',
				},
			})
			.state('app.administrative.annual-fee-and-duedates', {
				url: '/annual-fee-and-duedates',
				templateUrl: ADMINURL + 'fee_duedates/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [ADMINURL + 'fee_duedates/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Administrative > Set Annual Fee and Duedates',
					urlGroup: 'Administrative',
					formName: 'Set Annual Fee and Duedates',
				},
			})
			.state('app.administrative.lot-rate', {
				url: '/lot-rate',
				templateUrl: ADMINURL + 'lot_rate/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [ADMINURL + 'lot_rate/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Administrative > Set Lot Rate',
					urlGroup: 'Administrative',
					formName: 'Set Lot Rate',
				},
			})

			//TRANSACTION
			.state('app.transaction', {
				abstract: true,
			})
			.state('app.transaction.production', {
				url: '/production',
				templateUrl: TRANSURL + 'production/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [TRANSURL + 'production/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Transaction > Production',
					urlGroup: 'Transaction',
					formName: 'Production',
				},
			})
			.state('app.transaction.adjustment', {
				url: '/adjustment',
				templateUrl: TRANSURL + 'manual_adjustment/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [TRANSURL + 'manual_adjustment/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Transaction > Manual Adjustment',
					urlGroup: 'Transaction',
					formName: 'Manual Adjustment Entry',
				},
			})
			.state('app.transaction.inventory', {
				url: '/inventory',
				templateUrl: TRANSURL + 'inventory_entry/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [TRANSURL + 'inventory_entry/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Transaction > Inventory Entry',
					urlGroup: 'Transaction',
					formName: 'Inventory Entry',
				},
			})
			.state('app.transaction.slc', {
				url: '/slc',
				templateUrl: TRANSURL + 'slc_entry/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [TRANSURL + 'slc_entry/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Transaction > Supplies Ledger Entry',
					urlGroup: 'Transaction',
					formName: 'Supplies Ledger Entry',
				},
			})
			.state('app.transaction.dispersal', {
				url: '/dispersal',
				templateUrl: TRANSURL + 'dispersal/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [TRANSURL + 'dispersal/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Transaction > Dispersal',
					urlGroup: 'Transaction',
					formName: 'Dispersal',
				},
			})
			.state('app.transaction.certification', {
				url: '/certification',
				templateUrl: TRANSURL + 'certification/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [TRANSURL + 'certification/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Transaction > Certificate Issuance',
					urlGroup: 'Transaction',
					formName: 'Certificate Issuance',
				},
			})
			.state('app.transaction.ai', {
				url: '/ai_monitoring',
				templateUrl: TRANSURL + 'ai_monitoring/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [TRANSURL + 'ai_monitoring/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Transaction > Artificial Insemination',
					urlGroup: 'Transaction',
					formName: 'Artificial Insemination',
				},
			})
			.state('app.transaction.dispersalpayment', {
				url: '/dispersal-payment',
				templateUrl: TRANSURL + 'dispersal_payment/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [TRANSURL + 'dispersal_payment/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Transaction > Dispersal Payment',
					urlGroup: 'Transaction',
					formName: 'Dispersal Payment',
				},
			})
			.state('app.transaction.clientrequest', {
				url: '/client-request',
				templateUrl: TRANSURL + 'client_request/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [TRANSURL + 'client_request/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Transaction > Client Request',
					urlGroup: 'Transaction',
					formName: 'Client Request',
				},
			})
			.state('app.transaction.ris', {
				url: '/ris',
				templateUrl: TRANSURL + 'ris/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [TRANSURL + 'ris/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Transaction > Requisition and issue slip ',
					urlGroup: 'Transaction',
					formName: 'Requisition and issue slip',
				},
			})
			.state('app.transaction.cashiering-payment', {
				url: '/cashiering-payment',
				templateUrl: TRANSURL + 'cashiering_payment/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [TRANSURL + 'cashiering_payment/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Transaction > Cashiering Payment',
					urlGroup: 'Transaction',
					formName: 'Cashiering Payment',
				},
			})
			.state('app.transaction.petty-cash-entry', {
				url: '/petty-cash-entry',
				templateUrl: TRANSURL + 'petty_cash_entry/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [TRANSURL + 'petty_cash_entry/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Transaction > Petty Cash Entry',
					urlGroup: 'Transaction',
					formName: 'Petty Cash Entry',
				},
			})
			.state('app.transaction.check-issuance', {
				url: '/check-issuance',
				templateUrl: TRANSURL + 'check_issuance/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [TRANSURL + 'check_issuance/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Transaction > Check Issuance',
					urlGroup: 'Transaction',
					formName: 'Check Issuance',
				},
			})
			.state('app.transaction.general-journal-entry', {
				url: '/general-journal-entry',
				templateUrl: TRANSURL + 'general_journal_entry/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [TRANSURL + 'general_journal_entry/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Transaction > General Journal Entry',
					urlGroup: 'Transaction',
					formName: 'General Journal Entry',
				},
			})
			.state('app.transaction.monthly-receivable', {
				url: '/monthly-receivable',
				templateUrl: TRANSURL + 'monthly_receivable/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [TRANSURL + 'monthly_receivable/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Transaction > Run Monthly Receivable',
					urlGroup: 'Transaction',
					formName: 'Run Monthly Receivable',
				},
			})
			.state('app.transaction.annual-receivable', {
				url: '/annual-receivable',
				templateUrl: TRANSURL + 'annual_receivable/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [TRANSURL + 'annual_receivable/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Transaction > Run Annual Receivable',
					urlGroup: 'Transaction',
					formName: 'Run Annual Receivable',
				},
			})
			.state('app.transaction.beginning-balance-entry', {
				url: '/beginning-balance-entry',
				templateUrl: TRANSURL + 'beginning_balance_entry/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [TRANSURL + 'beginning_balance_entry/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Transaction > Beginning Balance Entry',
					urlGroup: 'Transaction',
					formName: 'Beginning Balance Entry',
				},
			})
			.state('app.transaction.monthly-dues-ledger', {
				url: '/monthly-dues-ledger',
				templateUrl: TRANSURL + 'monthly_dues_ledger/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [TRANSURL + 'monthly_dues_ledger/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Transaction > Monthly Dues Ledger',
					urlGroup: 'Transaction',
					formName: 'Monthly Dues Ledger',
				},
			})
			.state('app.transaction.construction-bond', {
				url: '/construction-bond',
				templateUrl: TRANSURL + 'construction_bond/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [TRANSURL + 'construction_bond/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Transaction > Construction Bond',
					urlGroup: 'Transaction',
					formName: 'Construction Bond',
				},
			})
			.state('app.transaction.ledger', {
				url: '/ledger',
				templateUrl: TRANSURL + 'ledger/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [TRANSURL + 'ledger/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Transaction > Ledger',
					urlGroup: 'Transaction',
					formName: 'Ledger',
				},
			})
			.state('app.transaction.aging', {
				url: '/aging',
				templateUrl: TRANSURL + 'aging/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [TRANSURL + 'aging/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Transaction > Aging',
					urlGroup: 'Transaction',
					formName: 'Aging',
				},
			})
			//REPORTS
			.state('app.reports', {
				abstract: true,
			})
			.state('app.reports.aging-of-receivable', {
				url: '/aging-of-receivable',
				templateUrl: REPURL + 'aging_of_receivable/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [REPURL + 'aging_of_receivable/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Reports > Aging of Receivable',
					urlGroup: 'Reports',
					formName: 'Aging of Receivable',
				},
			})
			.state('app.reports.collection-vs-receivable', {
				url: '/collection-vs-receivable',
				templateUrl: REPURL + 'collection_vs_receivable/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [REPURL + 'collection_vs_receivable/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Reports > Collection vs Receivable',
					urlGroup: 'Reports',
					formName: 'Collection vs Receivable',
				},
			})
			.state('app.reports.construction-bond-report', {
				url: '/construction-bond-report',
				templateUrl: REPURL + 'construction_bond_report/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [REPURL + 'construction_bond_report/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Reports > Construction Bond Report',
					urlGroup: 'Reports',
					formName: 'Construction Bond Report',
				},
			})
			.state('app.reports.cashier-daily-cash-disposition', {
				url: '/cashier-daily-cash-disposition',
				templateUrl: REPURL + 'cashier_daily_cash_disposition/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [REPURL + 'cashier_daily_cash_disposition/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Reports > Cashier Daily Cash Disposition',
					urlGroup: 'Reports',
					formName: 'Cashier Daily Cash Disposition',
				},
			})
			.state('app.reports.cashier-summary', {
				url: '/cashier-summary',
				templateUrl: REPURL + 'cashier_summary/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [REPURL + 'cashier_summary/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Reports > Cashier Summary',
					urlGroup: 'Reports',
					formName: 'Cashier Summary',
				},
			})
			.state('app.reports.trial-balance', {
				url: '/trial-balance',
				templateUrl: REPURL + 'trial_balance/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [REPURL + 'trial_balance/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Reports > Trial Balance',
					urlGroup: 'Reports',
					formName: 'Trial Balance',
				},
			})
			.state('app.reports.income-statement', {
				url: '/income-statement',
				templateUrl: REPURL + 'income_statement/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [REPURL + 'income_statement/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Reports > Income Statement',
					urlGroup: 'Reports',
					formName: 'Income Statement',
				},
			})
			.state('app.reports.balance-sheet', {
				url: '/balance-sheet',
				templateUrl: REPURL + 'balance_sheet/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [REPURL + 'balance_sheet/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Reports > Balance Sheet',
					urlGroup: 'Reports',
					formName: 'Balance Sheet',
				},
			})
			.state('app.reports.journal-book', {
				url: '/journal-book',
				templateUrl: REPURL + 'journal_book/view.html?v=' + VERSION,
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function ($ocLazyLoad) {
							return $ocLazyLoad.load({
								files: [REPURL + 'journal_book/controller.js?v=' + VERSION],
							});
						},
					],
				},
				params: {
					urlName: 'Reports > Journal Book',
					urlGroup: 'Reports',
					formName: 'Journal Book',
				},
			})
		$locationProvider.hashPrefix('');
	},
]);
