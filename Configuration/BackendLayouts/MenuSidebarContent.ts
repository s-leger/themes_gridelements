backendlayouts {
    MenuSidebarContent {
        icon = EXT:themes_gridelements/Resources/Public/BackendLayoutIcons/MenuSidebarContent.jpg
        name = MenuSidebarContent
        backend_layout (
		    colCount = 5
		    rowCount = 3
		    rows {
		        1 {
		            columns {
		                1 {
		                    name = Feature
		                    colspan = 5
		                    colPos = 3
		                }
		            }
		        }
		        2 {
		            columns {
		                1 {
		                    name = Menu
		                    colPos = 1
		                }
		                2 {
		                    name = Sidebar
		                    colPos = 2
		                }
		                3 {
		                    name = Content
		                    colspan = 3
		                    colPos = 0
		                }
		            }
		        }
		        3 {
		            columns {
		                1 {
		                    name = Extended
		                    colspan = 5
		                    colPos = 4
		                }
		            }
		        }
		    }
        )
    }
}